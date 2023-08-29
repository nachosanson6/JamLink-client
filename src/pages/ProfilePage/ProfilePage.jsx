import { Container, Row, Col, Button } from 'react-bootstrap'
import './../../pages/ProfilePage/ProfilePage.css'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from "../../contexts/auth.context"
import SpinnerComponent from "../../components/Spinner/Spinner"
import userservice from "../../services/user.service"
import { getInstruments } from "../../utils/instruments.util"
import { Link } from 'react-router-dom'


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

    if (!userInformation) {
        return (
            <SpinnerComponent />
        );
    }

    return (

        <Container>
            <Row className='row'>
                {/* TODO: ACOPLAR USERCARD */}
                <Col md={{ offset: 3, span: 6 }} className='userCard'>

                    <h1>Perfil de {userInformation.username} </h1>

                    <hr />
                    <img className='userAvatar' src={userInformation.avatar} alt="" />

                    <h2>{userInformation.email}</h2>

                    <h2>Descripción: {userInformation.description}</h2>
                    <h2>Instrumentos:</h2>

                    {
                        userInformation.instruments.map(elm => getInstruments(elm))
                    }
                    <h2>Amigos:</h2>

                    <Link className="btn btn-outline-success" to={`/user/edit/${userInformation.id}`}>Editar</Link>
                    <Link className="btn btn-outline-danger" to={'#'}>Eliminar</Link>



                </Col>
            </Row>
        </Container >
    )
}

export default ProfilePage