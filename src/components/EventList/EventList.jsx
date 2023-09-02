import { Row, Col } from "react-bootstrap"
import EventCard from "../EventCard/EventCard"
import SpinnerComponent from "../Spinner/Spinner"
import { useEffect, useState } from "react"
import eventsservice from "../../services/events.services"

const EventsList = () => {

    const [events, setEvents] = useState(null)

    useEffect(() => {
        loadEvents()
    }, [])

    const loadEvents = () => {
        eventsservice
            .getAllEvents()
            .then(({ data }) => setEvents(data))
            .catch(err => console.log(err))
    }

    if (!events) {
        return (
            <SpinnerComponent />
        );
    }

    return (
        !events ?
            <SpinnerComponent />
            :
            <Row className="mt-5">
                {
                    events.map(elm => {
                        return (
                            <Col lg={{ span: 3 }} md={{ span: 6 }}>
                                <EventCard {...elm} />
                            </Col>
                        )
                    })
                }
            </Row>

    )
}


export default EventsList