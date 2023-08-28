import { useContext } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import logoDark from './../../assets/images/logoDark.png'

const Navigation = () => {

    const { logout } = useContext(AuthContext)

    return (

        <Navbar bg="dark" data-bs-theme="dark">

            <Navbar.Brand className='ms-5' ><Link to={'/'} className='nav-link'><img
                alt=""
                src={logoDark}
                width="100"
                height="100"
                className="d-inline-block align-top"
            /></Link></Navbar.Brand>

            <Nav className="me-auto"   >

                <Link to={'/events'} className='nav-link'> Eventos </Link>
                <Link to={'/user/community'} className='nav-link'> Comunidad </Link>

                <NavDropdown title="Icono carita" id="basic-nav-dropdown">
                    <Link to={'/signup'} className='nav-link'> Crear Registro </Link>
                    <Link to={'/login'} className='nav-link'> Iniciar Sesión </Link>
                    <Link className='nav-link' onClick={logout}>Cerrar sesión</Link>
                </NavDropdown>


            </Nav>

        </Navbar>
    )
}

export default Navigation