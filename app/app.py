from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd, numpy as np, json, random, datetime
from sklearn.preprocessing import MinMaxScaler
from keras.models import Sequential
from keras.layers import Dense, LSTM, Dropout

# Functions
def read_data():
    data = firebase.get('','')
    records = [value for key, value in data.items()]
    df = pd.DataFrame(records)
    return df

def get_products(df):
    products = df['nombreProducto'].unique()
    return products

def convert_date(fecha_unix):
    return datetime.datetime.fromtimestamp(fecha_unix['seconds'])

def split_month(df, products):
    month_value = pd.DataFrame(columns=['fecha'])
    for product in products:
        filtrate = df.loc[df['nombreProducto'] == product]
        split = filtrate[['fecha', 'cantidadProducto']]
        split_copy = split.copy()
        split_copy.loc[:, 'fecha'] = split_copy.loc[:, 'fecha'].apply(convert_date)
        split_copy = split_copy.reset_index(drop=True)
        split_copy['fecha'] = pd.to_datetime(split_copy['fecha'])
        product_month = split_copy.groupby(split_copy['fecha'].dt.strftime('%Y-%m'))['cantidadProducto'].sum().reset_index()
        product_month = product_month.rename(columns={'cantidadProducto': product})
        month_value = month_value.merge(product_month, how='outer', on='fecha')
    return month_value

def add_data(month_value): # BORRAR - SOLO ES PARA AGREGAR MAS DATOS ALEATORIOS
    month_value['fecha'] = pd.to_datetime(month_value['fecha'], format='%Y-%m')
    month_value = month_value.sort_values('fecha')
    last_date = month_value['fecha'].iloc[-1]
    next_month = last_date - pd.DateOffset(months=1)  # Cambio realizado aquí
    new_rows = []
    for _ in range(100):
        new_row = {'fecha': next_month}
        for column in month_value.columns[1:]:
            new_row[column] = np.random.randint(1, 1000)
        new_rows.append(new_row)
        next_month -= pd.DateOffset(months=1)  # Cambio realizado aquí
    month_value = pd.concat([month_value, pd.DataFrame(new_rows)], ignore_index=True)
    month_value = month_value.sort_values('fecha')  # Se ordena por la fecha nuevamente
    month_value = month_value.reset_index(drop=True)
    return month_value

def month_predict(month_value):
    month_value['fecha'] = pd.to_datetime(month_value['fecha'], format='%Y-%m')
    month_value = month_value.set_index('fecha')  
    month_value = month_value.sort_index()
    last_date = month_value.index[-1]
    next_month = last_date + pd.offsets.MonthBegin(1)
    return next_month

def model_lstm(month_value, products,number_months):
    for k in range(number_months):
        df_pred_dict = {}
        next_month = month_predict(month_value)
        print(f"Mes a predecir: {next_month}")

        for product in products:
            df = month_value[[product]]
            df = pd.concat([df, pd.DataFrame({product: [0]}, index=[next_month])])
            train_set, test_set = df[:-1].values, df[-1:].values

            scaler = MinMaxScaler(feature_range=(-1, 1))
            scaler = scaler.fit(train_set)

            train_set = train_set.reshape(train_set.shape[0], train_set.shape[1])
            test_set = test_set.reshape(test_set.shape[0], test_set.shape[1])
            train_set_scaled = scaler.transform(train_set)
            test_set_scaled = scaler.transform(test_set)

            X_train, y_train = train_set_scaled[:, 1:], train_set_scaled[:, 0:1]
            X_train = X_train.reshape(X_train.shape[0], 1, X_train.shape[1])
            X_test, y_test = test_set_scaled[:, 1:], test_set_scaled[:, 0:1]
            X_test = X_test.reshape(X_test.shape[0], 1, X_test.shape[1])

            model = Sequential()
            model.add(LSTM(4, batch_input_shape=(1, X_train.shape[1], X_train.shape[2]), stateful=True))
            model.add(Dense(1))
            model.compile(loss='mean_squared_error', optimizer='adam')
            epocas = 1
            model.fit(X_train, y_train, epochs=epocas, batch_size=1, verbose=1, shuffle=False)

            y_pred = model.predict(X_test, batch_size=1)
            y_pred = y_pred.reshape(y_pred.shape[0], 1, y_pred.shape[1])

            pred_test_set = []
            for index in range(0, len(y_pred)):
                pred_test_set.append(np.concatenate([y_pred[index], X_test[index]], axis=1))

            pred_test_set = np.array(pred_test_set)
            pred_test_set = pred_test_set.reshape(pred_test_set.shape[0], pred_test_set.shape[2])
            pred_test_set_inverted = scaler.inverse_transform(pred_test_set)
            pred_test_set_inverted = pred_test_set_inverted.astype(int)

            df_pred = pd.DataFrame({product: pred_test_set_inverted[:, 0]})
            df_pred_dict[product] = df_pred

        df_pred_combined = pd.concat(df_pred_dict.values(), axis=1)
        df_pred_combined['fecha'] = next_month
        df_pred_combined = df_pred_combined[['fecha'] + df_pred_combined.columns[:-1].tolist()]

        month_value = pd.concat([month_value, df_pred_combined])
    months = month_value.tail(number_months)
    return months
from firebase import firebase 
firebase = firebase.FirebaseApplication('https://corazon-huasteco-bfbcc-default-rtdb.firebaseio.com/', None)

df = read_data()
products = get_products(df)
month_value = split_month(df,products)
data = add_data(month_value)
data.tail()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://127.0.0.1:5173"}})  # Agrega CORS con opciones

import os
os.environ["FIREBASE_THREAD_CREATION_DISABLED"] = "True"

@app.route('/api/predict', methods=['POST'])
def predict():
    try:
        datos = request.json
        next_month = datos['next_month']
        predict = model_lstm(data, products, next_month)
        # predict = predict.drop('fecha', axis=1)
        # Convertir el DataFrame a JSON antes de devolverlo
        predict_json = predict.to_json(orient='records')
        return jsonify(predict_json)
    except Exception as e:
        print("Error en la solicitud POST:", e)
        return jsonify({'error': str(e)})
import socket

if __name__ == '__main__':
    app.run(debug=True, port=5000)
