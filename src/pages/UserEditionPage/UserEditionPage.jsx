import { Container, Row, Col } from "react-bootstrap"
import SignupForm from './../../components/SignupForm/SignupForm'

const UserEditionPage = () => {

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