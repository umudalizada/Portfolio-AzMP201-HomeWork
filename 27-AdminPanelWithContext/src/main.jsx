import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createRoot } from 'react-dom'
import { ProductsContext } from './Context/ProductContext.jsx'
import { UserContext, UsersContext } from './Context/UsersContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductsContext>
    <UsersContext>
      <App />

    </UsersContext>
  </ProductsContext>,
)