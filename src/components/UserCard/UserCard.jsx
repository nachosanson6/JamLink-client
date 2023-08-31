import { Card, Button, Col, Form } from "react-bootstrap"
import { getInstruments } from "../../utils/instruments.util"
import './../UserCard/UserCard.css'
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import userservice from "../../services/user.service"
import { AuthContext } from "../../contexts/auth.context";


const UserCard = ({ _id, username, avatar, instruments }) => {

    const { loggedUser } = useContext(AuthContext)

    const handleAddFriend = e => {
        e.preventDefault()

        userservice
            .updateFriend(loggedUser._id, { _id })


    }

    return (
        <Col lg={{ span: 3 }} md={{ span: 6 }}>
            <Card >
                <Card.Img variant="top" className="userImg" src={avatar} />
                <Card.Body>
                    <Card.Title>{username}</Card.Title>
                    <Card.Text>
                        {
                            instruments.map(elm => getInstruments(elm))
                        }
                    </Card.Text>
                    <Link className="btn btn-outline-dark" to={`/user/profile/${_id}`}>Detalles</Link>
                    <Form onSubmit={handleAddFriend}>
                        <Button variant="outline-success" type='submit'>Añadir como amigo</Button>{' '}
                    </Form>
                    <Form /*onSubmit={handleDeleteFriend}*/>
                        <Button variant="outline-danger" type='submit'>Eliminar amigo</Button>{' '}
                    </Form>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default UserCard