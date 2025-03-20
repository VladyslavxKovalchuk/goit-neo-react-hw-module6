import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from 'react-redux'
import { persistor, store } from "./state/store.js";
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
