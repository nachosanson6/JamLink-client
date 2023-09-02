import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const EventCard = ({ title, description, date, organizer, _id }) => {

    return (
        <Col lg={{ span: 3 }} md={{ span: 6 }}>
            <Card >
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <p>{organizer}</p>
                    <Link className="btn btn-outline-dark" to={`/events/details/${_id}`}>Detalles</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default EventCard