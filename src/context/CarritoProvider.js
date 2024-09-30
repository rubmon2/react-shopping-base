import React, { useReducer } from 'react'
import { CarritoContext } from './ContexCarrito'


//estado
const initialState=[]

export const CarritoProvider = ({children}) => {


//reducer
const comprasReducer=(state=initialState, action={})=>{
switch(action.type){
    case "[Compras] agregar compra":{
        return [...state, { ...action.payload, cantidad: 1 }];    }
    case "[Compras] quitar compra":{
        return state.filter(s=> action.payload !== s.id )
    }
    case "[Compras] Aumentar compra": {
        return state.map(st => 
          st.id === action.payload
            ? { ...st, cantidad: st.cantidad + 1 }
            : st
        );
      }
      case "[Compras] disminuir compra": {
        return state.map(st => {
            if (st.id === action.payload && st.cantidad > 1) {
                return { ...st, cantidad: st.cantidad - 1 };  // Disminuir la cantidad si es mayor que 1
            }
            return st;  // Si no se cumple la condición, devolver el producto sin cambios
        });
    }
    
}

}

//usereducer
const [state,dispatch]=useReducer(comprasReducer,initialState)

//actions
const aumentarCompra= (id)=>{
    const action={
        type:"[Compras] Aumentar compra",
        payload:id,
    }
    dispatch(action)
}
const disminuirCompra= (id)=>{
    const action={
        type:"[Compras] disminuir compra",
        payload:id,
    }
    dispatch(action)
}
const agregrarCompra=(compra)=>{
    const action={
        type:"[Compras] agregar compra",
        payload:compra,
    }
    dispatch(action)
}
const quitarCompra= (id)=>{
 
    const action={
        type:"[Compras] quitar compra",
        payload:id,
    }   
    dispatch(action)
}

console.log(state)



  return (
<CarritoContext.Provider value={{agregrarCompra,aumentarCompra,disminuirCompra,quitarCompra,state}}>
    {children}
</CarritoContext.Provider>  )
}
