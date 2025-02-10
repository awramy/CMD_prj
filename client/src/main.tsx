import App from './App.tsx'
import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import {MainProvider} from "./contexts/mainContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainProvider>
      <App/>
    </MainProvider>
  </StrictMode>
)
