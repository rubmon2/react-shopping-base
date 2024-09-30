import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ProductoProvider } from './context/ProductoProvider';
import { CarritoProvider } from './context/CarritoProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <ProductoProvider>
 <CarritoProvider>
 <BrowserRouter>
   <App />
   </BrowserRouter>
 </CarritoProvider>
  </ProductoProvider>
  </>
);

