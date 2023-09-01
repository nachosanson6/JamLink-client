import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import eventsservice from "../../services/events.services"
import EventsList from "../../components/EventList/EventList"
import SpinnerComponent from "../../components/Spinner/Spinner"
import { Link } from "react-router-dom"


const EventsPage = () => {

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
        <>
            <Link to={'/event/create'} className="btn btn-dark">Nuevo Evento</Link>

            <Container>
                <EventsList events={events} />
            </Container>

        </>
    )
}

export default EventsPage