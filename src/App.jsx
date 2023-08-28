import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer/Footer'


const App = () => {


  return (
    <div className="App">
      <Navigation />
      <AppRoutes />
      <Footer />
    </div >
  )
}

export default App
