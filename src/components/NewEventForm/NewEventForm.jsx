import { useContext, useState } from "react"
import { Form, Button, } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.context";
import { useNavigate } from "react-router-dom";
import eventsservice from "../../services/events.services";
import MyComponent from "../GoogleMap/GoogleMap";
import Component from "../GoogleAutoComplete/GoogleAutoComplete";

const NewEventForm = () => {

    const { loggedUser } = useContext(AuthContext)

    const [eventData, setEventData] = useState({
        title: "",
        description: "",
        address: "",
        date: "",
        organizer: loggedUser._id
    })

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setEventData({ ...eventData, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        eventsservice
            .createEvent(eventData)
            .then(() => navigate('/events'))
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Título</Form.Label>
                <Form.Control type="text" value={eventData.title} onChange={handleInputChange} name="title" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" value={eventData.description} onChange={handleInputChange} name="description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Dirección</Form.Label>

                <Form.Control type="text" value={eventData.address} onChange={handleInputChange} name="address" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Fecha</Form.Label>
                <Form.Control type="date" value={eventData.date} onChange={handleInputChange} name="date" />
            </Form.Group>

            <Component />

            {/* <MyComponent /> */}

            <Button variant="outline-info" className="mt-3 ms-5" type="submit">
                Crear evento
            </Button>
        </Form>
    )
}

export default NewEventForm