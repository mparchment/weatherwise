import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyle from './styles/globalStyle.tsx'
import { LocationProvider } from './contexts/LocationContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <LocationProvider>
      <App />
    </LocationProvider>
  </React.StrictMode>,
)
