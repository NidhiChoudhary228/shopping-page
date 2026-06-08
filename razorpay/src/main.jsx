import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Razorpay from './components/pay.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <pay/>
  </StrictMode>,
)
