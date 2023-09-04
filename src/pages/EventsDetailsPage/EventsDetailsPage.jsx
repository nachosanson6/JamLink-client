import { Container, Card, Row, Col, Button, Modal } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import eventsservice from "../../services/events.services"
import { useContext, useEffect, useState } from "react"
import SpinnerComponent from "../../components/Spinner/Spinner"
import SalaelSol from "../../assets/images/SalaelSol.png"
import MyComponent from "../../components/GoogleMap/GoogleMap"
import JoinForm from "../../components/JoinForm/JoinForm"
import AttendeeCard from "../../components/AttendeeCard/AttendeeCard"
import { AuthContext } from "../../contexts/auth.context"


const EventsDetailsPage = () => {
  const { event_id } = useParams()
  const [eventInformation, setEventInformation] = useState(null)

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate()

  const { loggedUser } = useContext(AuthContext)

  const loadEventDetails = () => {
    eventsservice
      .getEventsDetails(event_id)
      .then(({ data }) => setEventInformation(data))
      .catch((err) => console.log(err))
  }

  const withdrawEvent = e => {

    eventsservice
      .withdrawEvent(eventInformation._id, loggedUser._id)
      .then(() => navigate(`/events`))
      .catch(err => console.log(err))

  }



  const usersJoined = []
  { eventInformation?.attendees.map(elm => { usersJoined.push(elm.user) }) }

  useEffect(() => {
    loadEventDetails()
  }, [event_id])

  if (!eventInformation) {
    return <SpinnerComponent />
  }

  return (

    <>

      <Container className=" align-items-center justify-content-center mt-3 mb-5" >

        <Card style={{ border: "2px solid black" }}>

          <div style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${loggedUser ? loggedUser.avatar : iconProfile
              })`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }} >

          </div>
          {/* <Card.Img variant="top" style={{ height: '40rem', width: '100%' }} src={SalaelSol} /> */}
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
                <Row className="d-flex">
                  {eventInformation.attendees.map((elm) => <AttendeeCard key={elm._id} attendee={elm} />)}
                </Row>

                <div className="mt-3">
                  {usersJoined.includes(loggedUser._id) ?
                    <Button variant="outline-danger" onClick={() => withdrawEvent()}>Desapuntarse</Button>
                    :
                    <Button variant="outline-success" onClick={() => setShowModal(true)}>Unirte</Button>
                  }
                  <Button variant="outline-warning">Editar</Button>
                  <Button variant="outline-danger">Eliminar</Button>
                </div>
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
