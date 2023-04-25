import React from 'react'
import './LoaderAnimation.css'

export const LoaderAnimation = () => {
    
  return (
    <div className="container">
        <div className="cargando">
            <div className="pelotas"></div>
            <div className="pelotas"></div>
            <div className="pelotas"></div>
            <span className="texto-cargando">Cargando... </span>
        </div>
    </div>
  )
}
