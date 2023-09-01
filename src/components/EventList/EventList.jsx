import { Row } from "react-bootstrap"
import EventCard from "../EventCard/EventCard"
import SpinnerComponent from "../Spinner/Spinner"



const EventsList = ({ events }) => {


    return (
        !events ?
            <SpinnerComponent />
            :

            <Row className="mt-5">
                {
                    events.map(elm => <EventCard {...elm} />)
                }
            </Row>

    )
}


export default EventsList