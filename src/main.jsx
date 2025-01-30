import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import { StoreProvider } from './Componenet/store.jsx'
import { StoreProvider } from './Componenet/Store/store.jsx'
createRoot(document.getElementById('root')).render(
    <StoreProvider>
         <App />
    </StoreProvider>

)
