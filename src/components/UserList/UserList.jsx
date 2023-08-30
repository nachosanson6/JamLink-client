import { Row } from "react-bootstrap"
import SpinnerComponent from "../Spinner/Spinner"
import UserCard from './../../components/UserCard/UserCard'

const UserList = ({ users }) => {

    return (
        !users ?
            <SpinnerComponent />
            :

            <Row className="mt-5">
                {
                    users.map(elm => <UserCard {...elm} />)
                }
            </Row>

    )
}

export default UserList