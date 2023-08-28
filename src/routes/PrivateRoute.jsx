import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import SpinnerComponent from "../components/Spinner/Spinner"
import { AuthContext } from "../contexts/auth.context"

const PrivateRoute = () => {

    const { loggedUser, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <SpinnerComponent />
    }

    if (!loggedUser) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}

export default PrivateRoute