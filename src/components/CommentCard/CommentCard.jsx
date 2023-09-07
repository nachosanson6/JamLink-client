import { useEffect, useState } from "react"
import { Card, Button, Row, Col } from "react-bootstrap"
import commentsservice from "../../services/comments.services"
import SpinnerComponent from "../Spinner/Spinner"
import { useNavigate } from "react-router-dom"
import { formatDate, formatTime } from "../../Utils/date.util"
import FriendsAvatar from "../FriendsAvatar/FriendsAvatar.util"

const CommentCard = ({ comment_id, event_id }) => {

    const navigate = useNavigate()

    const [commentInformation, setCommentInformation] = useState()

    !commentInformation &&
        commentsservice
            .getCommentData(comment_id)
            .then(({ data }) => setCommentInformation(data))
            .catch(err => console.log(err))



    const handleDeleteComment = e => {

        commentsservice
            .deleteComment(event_id, comment_id)
            .then(() => navigate(`/events`))
            .catch(err => console.log(err))
    }

    if (!commentInformation) {
        return <SpinnerComponent />
    }

    const formattedDate = formatDate(new Date(commentInformation.createdAt))
    const formattedTime = formatTime(new Date(commentInformation.createdAt))

    return (
        <Card className="mt-5 ">
            <Row >
                <Col md={5}>
                    <p>Creado: {formattedDate}  {formattedTime} </p>
                    <Card.Body>{commentInformation.comment}</Card.Body>

                </Col>
                <Col className="text-center" >
                    <p>Creado por: </p>
                    <FriendsAvatar friendId={commentInformation.owner} />
                </Col>
            </Row>
            <Button variant="outline-danger" size="sm" onClick={handleDeleteComment}>Eliminar commentario</Button>
        </Card>
    )
}

export default CommentCard