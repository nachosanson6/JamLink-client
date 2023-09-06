import { useContext, useState } from "react"
import { Form, Button, } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.context";
import { useNavigate } from "react-router-dom";
import eventsservice from "../../services/events.services";
import Autocomplete from "../GoogleAutoComplete/GoogleAutoComplete";

const NewEventForm = ({ eventData, isEdition }) => {

    const [eventDataForm, setEventDataForm] = useState(eventData)

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setEventDataForm({ ...eventDataForm, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        // TODO: RESOLVER CON ACTION

        isEdition ?
            eventsservice
                .updateEvent(eventDataForm)
                .then(() => navigate('/events'))
                .catch(err => console.log(err))
            :

            eventsservice
                .createEvent(eventDataForm)
                .then(() => navigate('/events'))
                .catch(err => console.log(err))
    }



    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Título</Form.Label>
                <Form.Control type="text" value={eventDataForm.title} onChange={handleInputChange} name="title" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" value={eventDataForm.description} onChange={handleInputChange} name="description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Fecha</Form.Label>
                <Form.Control type="datetime-local" value={eventDataForm.date} onChange={handleInputChange} name="date" />
            </Form.Group>

            <Autocomplete eventData={eventDataForm} setEventData={setEventDataForm} />


            {!isEdition &&
                <Button variant="outline-info" className="mt-3 ms-5" type="submit">
                    Crear evento
                </Button>}

            {isEdition &&
                <Button variant="outline-info" className="mt-3 ms-5" type="submit">
                    Editar evento
                </Button>}
        </Form>
    )
}

export default NewEventForm