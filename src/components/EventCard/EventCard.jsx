import { Card, Col } from "react-bootstrap"




const EventCard = ({ title, description, date, organizer }) => {

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
                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default EventCard