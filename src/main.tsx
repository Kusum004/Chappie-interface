import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Makes sure it finds App.tsx
import './index.css'    // Makes sure it finds index.css

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)