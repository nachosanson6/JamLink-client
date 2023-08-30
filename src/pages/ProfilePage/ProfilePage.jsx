import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import './../../pages/ProfilePage/ProfilePage.css'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from "../../contexts/auth.context"
import SpinnerComponent from "../../components/Spinner/Spinner"
import userservice from "../../services/user.service"
import { getInstruments } from "../../utils/instruments.util"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"


// const navigate = useNavigate()

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
    const handleFormSubmit = e => {
        e.preventDefault()

        userservice
            .deleteUser(loggedUser._id)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
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

                    <Link to={`/user/edit/${userInformation.id}`}>
                        <Button variant="outline-success">Editar</Button>{' '}
                    </Link>
                    <Form onSubmit={handleFormSubmit}>
                        <Button variant="outline-danger" type='submit'>Eliminar</Button>{' '}
                    </Form>


                </Col>
            </Row>
        </Container >
    )
}

export default ProfilePage