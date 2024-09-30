import React, { useContext, useEffect, useState } from 'react'
import { Cards } from '../component/Cards'
import { ContextProducto } from '../context/ContextProducto'
import { CarritoContext } from '../context/ContexCarrito'

export const Homepage = () => {

  const{productos,error}=useContext(ContextProducto)
  const{agregrarCompra,quitarCompra,state}=useContext(CarritoContext)


  return (
    <div>
        
          {error && <p>{error}</p>}
       
    <div className="{card.card}">
{productos.map((prod,index) => <Cards key={index}
prod={prod}
agregrarCompra={agregrarCompra}
quitarCompra={quitarCompra}
state={state}
></Cards>
)}
  </div>
  </div>
  )
}
