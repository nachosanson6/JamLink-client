import { Card, Button, Col } from "react-bootstrap"
import { getInstruments } from "../../utils/instruments.util"
import './../UserCard/UserCard.css'




const UserCard = ({ _id, username, avatar, instruments }) => {

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
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default UserCard