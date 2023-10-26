# Utiliza una imagen base adecuada para Node.js y React
FROM node:14

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia los archivos de la aplicación al contenedor
COPY . .

# Compila la aplicación React (esto puede variar según tu proyecto)
RUN npm run build

# Expón el puerto en el que se ejecutará la aplicación React
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
