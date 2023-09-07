import { Container, Card, Row, Col, Button, Modal } from "react-bootstrap"
import { Link, useNavigate, useParams } from "react-router-dom"
import eventsservice from "../../services/events.services"
import { useContext, useEffect, useState } from "react"
import SpinnerComponent from "../../components/Spinner/Spinner"
import Mapper from "../../components/GoogleMap/GoogleMap"
import JoinForm from "../../components/JoinForm/JoinForm"
import AttendeeCard from "../../components/AttendeeCard/AttendeeCard"
import { AuthContext } from "../../contexts/auth.context"
import { formatDate, formatTime } from "../../Utils/date.util"
import FriendsAvatar from "../../components/FriendsAvatar/FriendsAvatar.util"
import CommentForm from "../../components/CommentForm/CommentForm"
import CommentCard from "../../components/CommentCard/CommentCard"
import './EventDetailsPage.css'

const EventsDetailsPage = () => {

  const { event_id } = useParams()
  const [eventInformation, setEventInformation] = useState(null)
  const [showModal, setShowModal] = useState(false);
  const [isJoined, setIsJoined] = useState(true)
  const { loggedUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const usersJoined = eventInformation?.attendees.map(elm => elm.user)

  useEffect(() => {
    loadEventDetails()
  }, [isJoined])

  const loadEventDetails = () => {
    eventsservice
      .getEventsDetails(event_id)
      .then(({ data }) => setEventInformation(data))
      .catch((err) => console.log(err))
  }

  const withdrawEvent = e => {
    eventsservice
      .withdrawEvent(eventInformation._id, loggedUser._id)
      .then(({ data }) => console.log(data))
      .catch(err => console.log(err))
  }

  const deleteEvent = e => {
    eventsservice
      .deleteEvent(eventInformation._id)
      .then(() => navigate('/events'))
      .catch(err => console.log(err))
  }


  if (!eventInformation) {
    return <SpinnerComponent />
  }

  const ownEvent = eventInformation.owner === loggedUser._id
  const formattedDate = formatDate(new Date(eventInformation.date))
  const formattedTime = formatTime(new Date(eventInformation.date))

  return (

    <>

      <Container className=" align-items-center justify-content-center mt-3 mb-5" >

        <Card bg="transparent" style={{ border: "2px solid black" }}>

          <div style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${loggedUser ? loggedUser.avatar : iconProfile
              })`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }} >

          </div >
          {/* <Card.Img variant="top" style={{ height: '40rem', width: '100%' }} src={SalaelSol} /> */}
          <Card.Body className="eventDetails" >
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
                <Card.Subtitle className="mb-2">
                  <b>Fecha:</b> {formattedDate} <b>Hora de inicio:</b> {formattedTime}</Card.Subtitle>
                <p>Creado por:</p>
                <FriendsAvatar friendId={eventInformation.owner} />
                <p>Asistirán al evento:</p>
                <Row className="d-flex ">
                  {eventInformation.attendees.map((elm) => <AttendeeCard key={elm._id} attendee={elm} />)}
                </Row>

                <div className="mt-3">
                  {usersJoined.includes(loggedUser._id) ?
                    <Button variant="danger" onClick={() => { withdrawEvent(); setIsJoined(!isJoined) }}>Desapuntarse</Button>
                    :
                    <Button variant="success" onClick={() => setShowModal(true)}>Unirte</Button>
                  }

                  {ownEvent && (
                    <>
                      <Link to={`/event/edit/${event_id}`}>
                        <Button variant="outline-warning" >Editar</Button>
                      </Link>
                      <Button variant="outline-danger" onClick={deleteEvent}>Eliminar</Button>
                    </>
                  )}

                  <CommentForm event_id={eventInformation._id} loadEventDetails={loadEventDetails} />
                  {
                    eventInformation.comments.map(elm => <CommentCard comment_id={elm} loadEventDetails={loadEventDetails} event_id={eventInformation._id} />)

                  }

                </div>
              </Col>
              <Col className="ms-3">
                <Mapper location={[eventInformation.location]} label={[eventInformation.title]} />
              </Col>
            </Row >
          </Card.Body>
        </Card>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Elige tus instrumentos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <JoinForm setShowModal={setShowModal} isJoined={isJoined} setIsJoined={setIsJoined} />
          </Modal.Body>
        </Modal>


      </Container >

    </>
  )
}

export default EventsDetailsPage
