import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import eventsservice from "../../services/events.services"
import { useEffect, useState } from "react"
import SpinnerComponent from "../../components/Spinner/Spinner"

const EventsDetailsPage = () => {

    const {event_id} = useParams()
    const [eventInformation, setEventInformation] = useState(null)
    const loadEventDetails = () => {

        eventsservice
        .getEventsDetails(event_id)
        .then(({data}) => setEventInformation(data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        loadEventDetails()
    },[event_id])

    if (!eventInformation) {
        return (
            <SpinnerComponent />
        );
    }

    return (

        <Container>
            <h1>Events Details Page</h1>
            <p>{eventInformation.title}</p>
            <p>{eventInformation.description}</p>
        </Container>
    )
}

export default EventsDetailsPage