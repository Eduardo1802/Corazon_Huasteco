import React, { createContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [contador, setContador] = useState(0);
  const [open, setOpen] = useState(false);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  const disminuirContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const abrirDialog = () => {
    setOpen(true);
  };

  const cerrarDialog = () => {
    setOpen(false);
  };

  return (
    <CarritoContext.Provider
      value={{
        contador,
        aumentarContador,
        disminuirContador,
        open,
        abrirDialog,
        cerrarDialog,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
