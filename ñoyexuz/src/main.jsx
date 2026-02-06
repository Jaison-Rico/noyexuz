import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//MUI para nuestros styles
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline' //normaliza estilos (reemplaza al CSS reset)

const theme = createTheme({ // para personaliza colores, tipografías, etc.
  palette: {
    mode: 'dark', // light o dark
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> {/* para usar el tema global   */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
