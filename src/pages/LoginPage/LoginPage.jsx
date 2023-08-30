import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from '../../components/LoginForm/LoginForm'

const LoginPage = () => {

    return (

        <Container className='LoginPage' style={{ height: '100vh' }}>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>

                    <h1>Acceso</h1>

                    <hr />

                    <LoginForm />

                </Col>
            </Row>

        </Container>
    )
}

export default LoginPage