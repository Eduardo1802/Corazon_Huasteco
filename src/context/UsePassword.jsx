import { useState } from "react";

// logica para mostrar y ocultar el icono en contraseña
export const usePassword = () =>{
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = ()=>{
        setShowPassword(!showPassword)
    }

    return [showPassword, handleClickShowPassword];
}

//previene la recarga
export const handleMouseDownPassword = (event) => {
    event.preventDefault();
};