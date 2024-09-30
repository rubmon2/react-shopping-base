import React, { useState } from 'react'
export const Cards = ({prod, agregrarCompra,quitarCompra}) => {


  //estado
  const [added, setAdded]=useState(false)


  //negar su valor, para que cambie de falso a verdadero y verdadero a falso
  const onCompra=()=>{
   setAdded(!added)
   if(!added){
      agregrarCompra(prod)
   } else{quitarCompra(prod.id)}
  }


  return (
         <div className="{div}" key={prod.id}>
      <div><img  className="{div_img}" src={prod.image} alt={prod.title} /></div>
      <h5 className="{titulo}">{prod.title}</h5>
      <p className="{text}">{prod.description}</p>
      <p className="{parrafo}">${prod.price}</p>

      <button onClick={onCompra}> 
        {added ? "Quitar" : "Agregar"} 
      </button>
       </div>

  )
}
