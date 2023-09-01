import { Container, Row, Col } from 'react-bootstrap'
import NewEventForm from '../../components/NewEventForm/NewEventForm'

const EventsCreatePage = () => {

    return (

        <Container>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>
                    <h1>Nuevo evento</h1>

                    <hr />

                    <NewEventForm />

                </Col>

            </Row>

        </Container>
    )
}


export default EventsCreatePage