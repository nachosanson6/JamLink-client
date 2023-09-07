import { Card, Row, Col } from "react-bootstrap"
import FriendsAvatar from "../FriendsAvatar/FriendsAvatar.util"
import { getInstruments } from "../../utils/instruments.util"



const AttendeeCard = ({ attendee }) => {

    return (
        <Card style={{ width: '18rem', border: "2px solid black", color: "white" }} >

            <Card.Body style={{ color: "white" }}>
                <Row>
                    <Col>
                        <FriendsAvatar style={{ border: "2px solid black" }} friendId={attendee.user} />
                    </Col>
                    <Col className="d-flex mt-2 me-5" >
                        <Row>
                            {attendee.instruments.map(instrument => getInstruments(instrument))}
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
export default AttendeeCard