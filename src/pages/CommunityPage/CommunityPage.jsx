import { Container } from "react-bootstrap"
import { useContext, useEffect, useState } from "react"
import userservice from "../../services/user.service"
import { AuthContext } from './../../contexts/auth.context'
import SpinnerComponent from "../../components/Spinner/Spinner"
import UserList from './../../components/UserList/UserList'

const CommunityPage = () => {

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

        <Container>
            <UserList users={users} loadUsers={loadUsers} />
        </Container>
    )
}

export default CommunityPage