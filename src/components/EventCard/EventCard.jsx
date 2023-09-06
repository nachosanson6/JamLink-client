import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { formatDate, formatTime } from "../../Utils/date.util"


const EventCard = ({ title, description, date, owner, _id }) => {

  const formattedDate = formatDate(new Date(date))
  const formattedTime = formatTime(new Date(date))

  return (

    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <b>Fecha:</b> {formattedDate} <b>Hora de inicio:</b> {formattedTime}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <p>{owner}</p>
        <Link className="btn btn-outline-warning" to={`/events/details/${_id}`}>
          Detalles
        </Link>
      </Card.Body>
    </Card>

  )
}

export default EventCard
