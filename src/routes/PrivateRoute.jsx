import { useContext, useState } from "react"
import { Outlet, Navigate } from "react-router-dom"
import SpinnerComponent from "../components/Spinner/Spinner"
import { AuthContext } from "../contexts/auth.context"
import { Modal } from "react-bootstrap"
import LoginForm from "../components/LoginForm/LoginForm"

const PrivateRoute = () => {

    const { loggedUser, isLoading } = useContext(AuthContext)   

    if (isLoading) {
        return <SpinnerComponent />
    }

    if (!loggedUser) {

        const [showModal, setShowModal] = useState(true)
        
        const login = false

        return (
            <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Acceso</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <LoginForm setShowModal={setShowModal} login={login} />
            </Modal.Body>
          </Modal>
        )
    }

    return <Outlet />
}

export default PrivateRoute