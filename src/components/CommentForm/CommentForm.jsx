import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import commentsservice from "../../services/comments.services"
import { useNavigate } from "react-router-dom"



const CommentForm = ({ event_id }) => {

    const navigate = useNavigate()

    const [commentDataForm, setCommentDataForm] = useState({
        comments: ""
    })


    const handleInputChange = e => {
        const { value, name } = e.target
        setCommentDataForm({ ...commentDataForm, [name]: value })
    }


    const handleFormSubmit = e => {
        e.preventDefault()

        commentsservice
            .addComment(event_id, commentDataForm)
            .then(() => navigate('/events'))
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Añade tu comentario" value={commentDataForm.comments} onChange={handleInputChange} name="comments" />

            </Form.Group>


            <Button variant="outline-dark" type="submit">
                Añadir comentario
            </Button>
        </Form>
    )
}

export default CommentForm