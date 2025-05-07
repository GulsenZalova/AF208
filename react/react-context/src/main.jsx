import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TodoProvider from './context/TodoContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <TodoProvider>
    <App />
  </TodoProvider>,
)
