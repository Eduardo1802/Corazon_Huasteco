import React, { createContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  const disminuirContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <CarritoContext.Provider
      value={{
        contador,
        aumentarContador,
        disminuirContador,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
