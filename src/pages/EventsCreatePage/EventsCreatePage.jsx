import { Container, Row, Col } from 'react-bootstrap'
import NewEventForm from '../../components/NewEventForm/NewEventForm'
import { useState } from 'react'

const EventsCreatePage = () => {

    const [eventData, setEventData] = useState({
        title: "",
        description: "",
        address: "",
        date: "",
        location: {
            type: 'Point',
            coordinates: [Number]
        },
    })

    return (

        <Container>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>
                    <h1>Nuevo evento</h1>

                    <hr />

                    <NewEventForm eventData={eventData} isEdition={false} />

                </Col>

            </Row>

        </Container>
    )
}


export default EventsCreatePage