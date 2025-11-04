
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Authstatus from './Components/Authstatus.jsx'

createRoot(document.getElementById('root')).render(
  
     <BrowserRouter>
    <Authstatus>
        <App />
    </Authstatus>
    </BrowserRouter>
    
    
)
