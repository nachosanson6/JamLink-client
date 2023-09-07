import { Container } from "react-bootstrap"
import UserList from './../../components/UserList/UserList'

const CommunityPage = () => {


    return (

        <Container>
            <h1>Nuestros usuarios</h1>
            <UserList />
        </Container>
    )
}

export default CommunityPage