import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ProductsApp} from './ProductsApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsApp title={'Hola mundo React!'}/>
  </StrictMode>,
)
