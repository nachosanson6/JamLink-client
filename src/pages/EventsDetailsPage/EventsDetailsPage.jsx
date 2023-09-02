import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import eventsservice from "../../services/events.services";
import { useEffect, useState } from "react";
import SpinnerComponent from "../../components/Spinner/Spinner";
import SalaelSol from "../../assets/images/SalaelSol.png";

const EventsDetailsPage = () => {
  const { event_id } = useParams();
  const [eventInformation, setEventInformation] = useState(null);

  const loadEventDetails = () => {
    eventsservice
      .getEventsDetails(event_id)
      .then(({ data }) => setEventInformation(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadEventDetails();
  }, [event_id]);

  if (!eventInformation) {
    return <SpinnerComponent />;
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ Height: "100vh" }}
    >
      <Card style={{ border: "2px solid black" }}>
        <Card.Img variant="top" src={SalaelSol} />
        <Card.Body>
          <Card.Title className="d-flex align-items-center justify-content-center">
            {eventInformation.title}
          </Card.Title>
          <Card.Text className="d-flex align-items-center justify-content-center">
            {eventInformation.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EventsDetailsPage;
