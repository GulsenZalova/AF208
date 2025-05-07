import { createRoot } from 'react-dom/client'
import SupplierProvider from './context/SupplierContext.jsx';
import FavoritesProvider from './context/FavoritesContext.jsx';
import React from 'react';
import BasketProvider from './context/BasketContext.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BasketProvider>
    <FavoritesProvider>
      <SupplierProvider>
        <App />
      </SupplierProvider>
    </FavoritesProvider>
  </BasketProvider>
  ,
)
