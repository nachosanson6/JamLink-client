import { useContext } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import logoDark from './../../assets/images/logoDark.png'
import iconProfile from './../../assets/images/iconProfile.png'

const Navigation = () => {

    const { logout, loggedUser } = useContext(AuthContext)

    return (

        <Navbar bg="dark" data-bs-theme="dark">

            <Container>
                <Navbar.Brand className='ms-10' ><Link to={'/'} className='nav-link'><img
                    alt=""
                    src={logoDark}
                    width="100"
                    height="100"
                    className="d-inline-block align-top"
                /></Link></Navbar.Brand>

                <Nav className="me-auto">

                    <Link to={'/events'} className='nav-link'> Eventos </Link>

                    {
                        loggedUser &&

                        <Link to={'/user/community'} className='nav-link'> Comunidad </Link>

                    }

                </Nav>

                <Nav className='justify-content-end'>

                    <NavDropdown id="basic-nav-dropdown" className='userIcon'
                        title={<div className="userIcon"
                            style={{ width: "50px", height: "50px", borderRadius: "50%" }}>
                            {

                                loggedUser &&
                                <img src={loggedUser.avatar}
                                    alt='userIcon'
                                    style={{ width: "100%", height: "100%", borderRadius: "50%" }} />
                            }

                            {
                                !loggedUser &&
                                <img src={iconProfile}
                                    alt='userIcon'
                                    style={{ width: "100%", height: "100%", borderRadius: "50%" }} />
                            }
                        </div>}
                    >

                        {
                            !loggedUser &&
                            <>
                                <Link to={'/signup'} className='nav-link'> Crear Registro </Link>
                                <Link to={'/login'} className='nav-link'> Iniciar Sesión </Link>
                            </>
                        }


                        {
                            loggedUser &&
                            <>
                                <Link to={'/user/profile'} className='nav-link'> Mi perfil </Link>
                                <Link className='nav-link' onClick={logout}>Cerrar sesión</Link>
                            </>
                        }
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar >
    )
}

export default Navigation