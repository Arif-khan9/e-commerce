
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Authstatus from './Components/Authstatus.jsx'
import { Store } from 'lucide-react'
import { Provider } from 'react-redux'
import { store } from './store'

createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
   <BrowserRouter>
    <Authstatus>
        <App />
    </Authstatus>
    </BrowserRouter>
    </Provider>
    
    
)
