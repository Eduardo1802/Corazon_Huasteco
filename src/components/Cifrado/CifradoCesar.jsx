import React, { useState } from 'react'

export const CifradoCesar = () => {
    const [cifrado, setCifrado] = useState("");
    const [descifrado, setDescifrado] = useState("");
    
    const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    const cifrar =(e) =>{
        e.preventDefault();
        const text = e.target.text.value.toUpperCase();     //entrada
        const arrText = [...text];                          //arreglo a partir de la cadena
        const nuevoArray = [];                              //arreglo de salida

        for(let i=0; i<arrText.length; i++){                //recorre la palabra
            for(let j=0; j<alfabeto.length; j++){           //recorre el abecedario
                if(arrText[i] === alfabeto[j]){             //si encuentra una coincidencia en ambos arreglos...
                    var x=j+3;                              //Aumenta "Letra" sumando 3
                    if( x >= alfabeto.length){
                        x=x-alfabeto.length;
                    }                        
                    var band=alfabeto[x]; 
                }
            }
            nuevoArray[i] = band;                           //se guarda el nuevo string
        }
        console.log("Mensaje Encriptado: " + nuevoArray);           //imprime el dato cifrado
        setCifrado(nuevoArray);
        e.target.reset();
    }

    const descifrar =(e) =>{
        e.preventDefault();
        const text = e.target.crypt.value.toUpperCase();     //entrada
        const arrText = [...text];                          //arreglo a partir de la cadena
        const nuevoArray = [];                              //arreglo de salida

        for(let i=0; i<arrText.length; i++){                //recorre la palabra
            for(let j=0; j<alfabeto.length; j++){           //recorre el abecedario
                if(arrText[i] === alfabeto[j]){             //si encuentra una coincidencia en ambos arreglos...
                    var x=j-3;                              //Aumenta "Letra" sumando 3
                    if( x < 0){
                        x=x+alfabeto.length;
                    }                        
                    var band=alfabeto[x]; 
                }
            }
            nuevoArray[i] = band;                           //se guarda el nuevo string
        }
        console.log("Mensaje DesEncriptado: " + nuevoArray);           //imprime el dato cifrado
        setDescifrado(nuevoArray);
        e.target.reset();
    }    

  return (
    <div style={{display: "flex"}}>
        <div style={{display: "flex", flexFlow: "column wrap", padding: "20px", margin: "20px", minHeight: "100vh"}}>
            <h1>Cifrador Cesar.</h1>
            <form autoComplete="off" onSubmit={cifrar}>
                <textarea placeholder="Ingrese el texto a encriptar" type="text" name="text" required style={{minWidth: "600px", minHeight: "200px", maxHeight: "500px", margin: "10px"}} />
                <input value="Cifrar" type="submit" style={{display: "block", margin: "10px", background: "#A6874E", color: "white", padding: "7px", borderRadius: "10px"}} />
            </form>
            
            <div style={{margin: "10px"}}>{cifrado}</div>
        </div>


        <div style={{display: "flex", flexFlow: "column wrap", padding: "20px", margin: "20px", minHeight: "100vh"}}>
            <h1>Descifrador Cesar.</h1>
            <form autoComplete="off" onSubmit={descifrar}>
                <textarea placeholder="Ingrese el texto a desencriptar" type="text" name="crypt" required style={{minWidth: "600px", minHeight: "200px", maxHeight: "500px", margin: "10px"}} />
                <input value="Descifrar" type="submit" style={{display: "block", margin: "10px", background: "#A6874E", color: "white", padding: "7px", borderRadius: "10px"}} />
            </form>
            
            <div style={{margin: "10px"}}>{descifrado}</div>
        </div>
    </div>
  )
}
