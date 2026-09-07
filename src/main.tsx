import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.tsx'

// @ts-ignore: O Vite processa o CSS nativamente, ignorar validação do TS neste escopo
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
