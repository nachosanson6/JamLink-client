import { Container } from "react-bootstrap"
import EventsList from "../../components/EventList/EventList"
import { Link } from "react-router-dom"


const EventsPage = () => {

    return (
        <Container>
            <Link to={'/event/create'} className="btn btn-outline-light mb-4">Nuevo Evento</Link>
            <EventsList />
        </Container>
    )
}

export default EventsPage