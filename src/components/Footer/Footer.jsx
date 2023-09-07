import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme.context'
import './Footer.css'

const Footer = ({ message }) => {
    const { theme } = useContext(ThemeContext); 
  
    const footerStyle = {
      backgroundColor: theme === 'dark' ? '#fff' : '#333',
      color: theme === 'dark' ? '#333' : '#fff',
      border: 'solid 2px black'
    };
  
    return (
      <footer style={footerStyle}>
        {message || 'Todos los derechos reservados'}
      </footer>
    )
  }


export default Footer