import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import './../../pages/ProfilePage/ProfilePage.css'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from "../../contexts/auth.context"
import SpinnerComponent from "../../components/Spinner/Spinner"
import userservice from "../../services/user.service"
import { useNavigate, useParams } from "react-router-dom"
import UserDetails from './../../components/UserDetails/UserDetails'


const ProfilePage = () => {

    const { user_id } = useParams()
    const [userInformation, setUserInformation] = useState(null)

    const loadUserDetails = () => {
        userservice
            .getUserDetails(user_id)
            .then(({ data }) => setUserInformation(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadUserDetails()
    }, [user_id])

    if (!userInformation) {
        return (
            <SpinnerComponent />
        );
    }

    const handleFormSubmit = e => {

        e.preventDefault()

        userservice
            .deleteUser(loggedUser._id)
            .then(() => useNavigate('/'))
            .catch(err => console.log(err))
    }


    return (

        <Container>
            <Row className='row'>
                {/* TODO: ACOPLAR USERDETAILS */}

                <UserDetails userInformation={userInformation} />
            </Row>
        </Container >
    )
}

export default ProfilePage