import App from './App.tsx'
import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import {UserProvider} from "./contexts/userContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <App/>
    </UserProvider>
  </StrictMode>
)
