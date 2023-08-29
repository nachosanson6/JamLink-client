import { Container, Row } from 'react-bootstrap'
import './../../pages/ProfilePage/ProfilePage.css'
import UserCard from '../../components/userCard/userCard'



const ProfilePage = () => {




    return (

        <Container>
            <Row className='row'>

                <UserCard />

            </Row>

        </Container >
    )
}

export default ProfilePage