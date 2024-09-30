import React, { useContext } from 'react'
import { CarritoContext } from '../context/ContexCarrito'
import { useNavigate } from 'react-router-dom'


export const CarritoPage = () => {


  const {aumentarCompra,
    disminuirCompra,
    quitarCompra,
    state}=useContext(CarritoContext)



//volver a home

const navigate=useNavigate()
const onHome=()=>{
  navigate("/")
}
//total
const totalSuma = state.reduce((acc, item) => acc + (item.price * item.cantidad), 0)  

return (

    
    <div>
<div>
  <h1>Tus compras</h1>
</div>

      <table className="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Price</th>
      <th scope="col">Aumentar o Disminuir</th>
      <th scope="col">Quitar</th>
    </tr>
  </thead>
  <tbody>
    
   {state.map(st=>( 
      <tr key={st.id}>
      <th scope="row">{st.title}</th>
      <td>{st.price * st.cantidad}</td>
      <td>
    
      <p>{st.cantidad}</p>
       <button onClick={()=>disminuirCompra(st.id)}>Disminuir</button> <button onClick={()=>aumentarCompra(st.id)} >Aumentar</button>

       </td>
     <button onClick={()=>quitarCompra(st.id)}>Quitar compra</button> 

    </tr>
  ))}
 <div>
  <p>Total: $ {totalSuma}</p>
 </div>
  </tbody>
</table>
<button>Comprar</button>


<button onClick={()=>onHome()}> Volver, Quiero Agregar mas</button>
    </div>


  )
}
