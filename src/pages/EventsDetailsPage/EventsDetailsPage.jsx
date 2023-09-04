import { Container, Card, Row, Col, Button, Modal } from "react-bootstrap"
import { useParams } from "react-router-dom"
import eventsservice from "../../services/events.services"
import { useEffect, useState } from "react"
import SpinnerComponent from "../../components/Spinner/Spinner"
import SalaelSol from "../../assets/images/SalaelSol.png"
import MyComponent from "../../components/GoogleMap/GoogleMap"
import JoinForm from "../../components/JoinForm/JoinForm"

const EventsDetailsPage = () => {
  const { event_id } = useParams()
  const [eventInformation, setEventInformation] = useState(null)

  const [showModal, setShowModal] = useState(false);

  const loadEventDetails = () => {
    eventsservice
      .getEventsDetails(event_id)
      .then(({ data }) => setEventInformation(data))
      .catch((err) => console.log(err))
  }
  console.log(eventInformation)

  useEffect(() => {
    loadEventDetails()
  }, [event_id])

  if (!eventInformation) {
    return <SpinnerComponent />
  }

  return (

    <>

      <Container className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>

        <Card style={{ border: "2px solid black" }}>
          <Card.Img variant="top" src={SalaelSol} />
          <Card.Body>
            <Row>
              <Col md={6} >
                <Card.Title className="d-flex align-items-center justify-content-center">
                  {eventInformation.title}
                </Card.Title>
                <Card.Text className="d-flex align-items-center justify-content-center">
                  {eventInformation.description}
                </Card.Text>
                <Card.Text className="d-flex align-items-center justify-content-center">
                  {eventInformation.address}
                </Card.Text>
                {eventInformation.attendees.map(elm => <h3>{elm.user} </h3>)}

                <Button variant="outline-success" onClick={() => setShowModal(true)}>Unirte</Button>
                <Button variant="outline-warning">Editar</Button>
                <Button variant="outline-danger">Eliminar</Button>
              </Col>
              <Col className="ms-3">
                <MyComponent location={eventInformation.location} />
              </Col>
            </Row >
          </Card.Body>
        </Card>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Elige tus instrumentos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <JoinForm setShowModal={setShowModal} />
          </Modal.Body>
        </Modal>


      </Container >

    </>
  )
}

export default EventsDetailsPage
