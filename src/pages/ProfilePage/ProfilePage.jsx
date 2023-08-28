import { useContext, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AuthContext } from '../../contexts/auth.context'
import SpinnerComponent from '../../components/Spinner/Spinner'
import userservice from '../../services/user.service'
import microfono from './../../assets/images/instruments/karaoke.png'
import './../../pages/ProfilePage/ProfilePage.css'
import instrumentsUtil from '../../Utils/instruments.util'



const ProfilePage = () => {

    const { loggedUser } = useContext(AuthContext)

    const [userInformation, setUserInformation] = useState(null)

    useEffect(() => {
        loadUserDetails()
    }, [])

    const loadUserDetails = () => {
        userservice
            .getUserDetails(loggedUser._id)
            .then(({ data }) => setUserInformation(data))
            .catch(err => console.log(err))
    }
    if (userInformation === null) {
        return (
            <SpinnerComponent />
        );
    }


    return (

        <Container>
            <Row>

                <Col md={{ offset: 3, span: 6 }}>
                    <h1>Perfil de usuario</h1>

                    <hr />
                    <img src={userInformation.avatar} alt="" />
                    <h2>{userInformation.username}</h2>
                    <h2>{userInformation.description}</h2>

                    {
                        userInformation.instruments.map(elm => instrumentsUtil(elm))
                    }




                </Col>

            </Row>

        </Container>
    )
}

export default ProfilePage