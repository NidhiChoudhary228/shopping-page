import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Razorpay } from './components/Razorpay.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Razorpay />
  </StrictMode>,
)
