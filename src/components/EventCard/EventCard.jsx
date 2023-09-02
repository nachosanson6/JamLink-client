import { Card } from "react-bootstrap";

const EventCard = ({ title, description, date, organizer }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <p>{organizer}</p>
        {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
};
