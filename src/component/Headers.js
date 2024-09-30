import React from 'react'
import { Link } from 'react-router-dom'


export const Headers = () => {
  return (
    <div> <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/carrito">Carrito</Link>
      </li>
    </ul>
  </nav></div>
  )
}
