import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const EventCard = ({ title, description, date, organizer, _id }) => {

  return (

    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <p>{organizer}</p>
        <Link className="btn btn-outline-warning" to={`/events/details/${_id}`}>
          Detalles
        </Link>
      </Card.Body>
    </Card>

  )
}

export default EventCard
