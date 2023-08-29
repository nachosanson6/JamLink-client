import { Container, Row } from 'react-bootstrap'
import './../../pages/ProfilePage/ProfilePage.css'
import UserCard from '../../components/userCard/userCard'

const ProfilePage = () => {


    return (

        <Container>
            <Row className='row'>
                {/* TODO: ACOPLAR USERCARD */}
                <UserCard />
            </Row>
        </Container >
    )
}

export default ProfilePage