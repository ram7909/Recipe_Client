import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RecipeState from './context/RecipeState.jsx'
createRoot(document.getElementById('root')).render(
  <RecipeState>
    <App />
  </RecipeState>,
)
