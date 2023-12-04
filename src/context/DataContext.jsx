// DataContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { app } from '../config/firebase/firebase';

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docList = await app.firestore().collection("tematicas").get();
        const projects = docList.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(projects);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    console.log("DataContext", data)
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};
