import { useContext } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'
import { ThemeContext } from './contexts/theme.context'

const App = () => {

  const { theme } = useContext(ThemeContext)

  return (

    <div className={`App ${theme}`}>

      <Navigation />

      <AppRoutes />

      <Footer />

    </div >
  )
}

export default App
