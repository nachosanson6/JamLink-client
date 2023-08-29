import { Container, Row, Col } from "react-bootstrap"
import SignupForm from './../../components/SignupForm/SignupForm'
import { useParams } from "react-router-dom"
import userservice from "../../services/user.service"
import { AuthContext } from "../../contexts/auth.context"
import { useContext, useState } from "react"



const UserEditionPage = () => {

    const { loggedUser } = useContext(AuthContext)







    return (

        <Container>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>
                    <h1>Editar</h1>

                    <hr />

                    <SignupForm />

                </Col>

            </Row>

        </Container>
    )
}

export default UserEditionPage