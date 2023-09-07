import { useContext } from "react"
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context"
import logoDark from "./../../assets/images/logoDark.png"
import logoLight from "./../../assets/images/logoLight.png"
import iconProfile from "./../../assets/images/iconProfile.png"
import { ThemeContext } from "../../contexts/theme.context"
import { Modal } from "react-bootstrap"
import LoginForm from "../../components/LoginForm/LoginForm"
import { useState } from "react"

const Navigation = () => {

  const { theme, switchTheme } = useContext(ThemeContext)
  const { logout, loggedUser } = useContext(AuthContext)
  const [showModal, setShowModal] = useState(false)

  const navigate = useNavigate()

  const fireFinalActions = () => {
    setShowModal(false)
    navigate('/')
  }

  return (
    <>

      <Navbar
        bg={theme === "dark" ? "light" : "dark"}
        data-bs-theme={theme === "dark" ? "light" : "dark"}
        className=""
        expand="lg"
        style={{ padding: 0 }}
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand className="ms-10" style={{ padding: 0 }}>
            <Link to={"/"} className="nav-link">
              <img
                alt=""
                src={theme === "dark" ? logoLight : logoDark}
                width="100"
                height="100"
                className="d-inline-block align-top"
              />
            </Link>
          </Navbar.Brand>

          <Nav className="me-auto fs-3">
            <Link to={"/events"} className="nav-link">
              Eventos
            </Link>

            {loggedUser && (
              <Link to={"/user/community"} className="nav-link">
                Comunidad
              </Link>
            )}
          </Nav>
          <div className="d-flex" style={{ marginRight: "30px" }}>
            <Button variant="outline-primary" className="fs-3" onClick={switchTheme}>
             Tema {theme === "dark" ? "oscuro" : "claro"} 
            </Button>
          </div>

          <div className="justify-content-end">
            <NavDropdown
              className="userIcon"
              title={
                <div
                  className="userIcon"
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    marginRight: "100px",
                    marginTop: "10px",
                  }}
                >
                  <div
                    alt="iconProfile"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      backgroundImage: `url(${loggedUser ? loggedUser.avatar : iconProfile
                        })`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  />
                </div>
              }
            >
              {!loggedUser && (
                <>
                  <Link to={"/signup"} className="nav-link fs-5" >
                    Registro
                  </Link>
                  <hr />
                  <Button variant="dark" className="fs-5" onClick={() => setShowModal(true)}>
                    Iniciar Sesión
                  </Button>
                </>
              )}

              {loggedUser && (
                <>
                  <Link
                    to={`/user/profile/${loggedUser._id}`}
                    className="nav-link fs-5"
                  >
                    Mi perfil{" "}
                  </Link>
                  <hr />
                  <Link className="nav-link fs-5" 
                   onClick={logout}>
                    Cerrar sesión
                  </Link>
                </>
              )}
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-2">Acceso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm fireFinalActions={fireFinalActions} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Navigation
