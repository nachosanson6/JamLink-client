import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useParams } from "react-router-dom"
import eventsservice from "../../services/events.services"
import NewEventForm from "../../components/NewEventForm/NewEventForm"
import SpinnerComponent from "./../../components/Spinner/Spinner"

const EventsEditPage = () => {

    const { event_id } = useParams()

    const [eventData, setEventData] = useState()
    const isEdition = true

    useEffect(() => {
        getEventInformation()
    }, [])

    const getEventInformation = () => {
        eventsservice
            .getEventsDetails(event_id)
            .then(({ data }) => setEventData(data))
            .catch(err => console.log(err))
    }

    if (!eventData) {
        return (
            <SpinnerComponent />
        );
    }
    return (

        <Container>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>
                    <h1>Editar evento</h1>

                    <hr />
                    <NewEventForm eventData={eventData} isEdition={isEdition} />
                </Col>

            </Row>

        </Container>
    )
}

export default EventsEditPage