import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <App />
    <h1 className='bg-red-400 text-2xl text-center rounded-2xl '></h1>
  </StrictMode>,
)
