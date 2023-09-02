import { Row } from "react-bootstrap"
import SpinnerComponent from "../Spinner/Spinner"
import UserCard from './../../components/UserCard/UserCard'
import { useContext, useEffect, useState } from "react"
import userservice from "../../services/user.service"
import { AuthContext } from './../../contexts/auth.context'

const UserList = () => {

    const { loggedUser } = useContext(AuthContext)

    const [users, setUsers] = useState(null)

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = () => {
        userservice
            .getUsers(loggedUser._id)
            .then(({ data }) => setUsers(data))
            .catch(err => console.log(err))
    }

    if (!users) {
        return (
            <SpinnerComponent />
        );
    }


    return (
        !users ?
            <SpinnerComponent />
            :

            <Row className="mt-5">
                {
                    users.map(elm => <UserCard {...elm} loadUsers={loadUsers} />)
                }
            </Row>

    )
}

export default UserList