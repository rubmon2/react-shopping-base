import React, { useEffect, useState } from 'react'
import { ContextProducto } from './ContextProducto'

export const ProductoProvider = ({children}) => {


//estado
const [productos, setProductos]=useState([])
const [error, setError]=useState("")

//fetch
const getFetch= async()=>{
try {
    const response=await fetch("https://fakestoreapi.com/products")
    const data= await response.json()
    setProductos(data)
  
    if(!data){
        throw new Error ("La data no llego")
    }

} catch (error) {
    setError(error.message)
    console.log(error)
}

}

//useeffect

useEffect(()=>{getFetch()}
,[])



  return (
   <ContextProducto.Provider value={{productos,setProductos,error, setError}}>
          {children}
   </ContextProducto.Provider>
  )
}
