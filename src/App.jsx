import React from 'react'
import Header from './components/Header'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'; // Import the custom theme
import Hero from './components/Hero';

const App = () => {
  return (
<ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
      <Hero/>
      
    </ThemeProvider>

   
    
  )
}

export default App