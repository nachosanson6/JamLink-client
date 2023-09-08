import { useEffect, useState } from "react"
import { Card, Button, Row, Col } from "react-bootstrap"
import commentsservice from "../../services/comments.services"
import SpinnerComponent from "../Spinner/Spinner"
import { useNavigate } from "react-router-dom"
import { formatDate, formatTime } from "../../utils/date.util"
import FriendsAvatar from "../FriendsAvatar/FriendsAvatar.util"
import './CommentCard.css'

const CommentCard = ({ comment_id, event_id, loadEventDetails }) => {

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
            .then(() => loadEventDetails())
            .catch(err => console.log(err))
    }

    if (!commentInformation) {
        return <SpinnerComponent />
    }

    const formattedDate = formatDate(new Date(commentInformation.createdAt))
    const formattedTime = formatTime(new Date(commentInformation.createdAt))

    return (
        <Card className="mt-5 commentCard">
            <Row >
                <Col md={5}>
                    <p>Creado: {formattedDate}  {formattedTime} </p>
                    <p className="comment" style={{ color: "black" }}>{commentInformation.comment}</p>

                </Col>
                <Col className="text-center" >
                    <p>Creado por: </p>
                    <FriendsAvatar friendId={commentInformation.owner} />
                </Col>
            </Row>
            <Button variant="danger" size="sm" onClick={handleDeleteComment}>Eliminar commentario</Button>
        </Card>
    )
}

export default CommentCard