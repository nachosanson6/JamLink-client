import { useContext, useState } from "react"
import InstrumentsForm from "../InstrumentsForm/InstrumentsForm"
import { Button } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.context"
import { useNavigate, useParams } from "react-router-dom"
import eventsservice from "../../services/events.services"
import './JoinForm.css'

const JoinForm = ({ setIsJoined, isJoined, setShowModal }) => {

    const navigate = useNavigate()

    const { loggedUser } = useContext(AuthContext)
    const { event_id } = useParams()
    const [signupData, setSignupData] = useState({
        instruments: []
    })

    const joinEvent = e => {
        eventsservice
            .joinEvent(event_id, loggedUser._id, signupData)
            .then(() => {
                setIsJoined(!isJoined)
                setShowModal(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="instrumentsSelection">
            <InstrumentsForm signupData={signupData} setSignupData={setSignupData} />
            <Button variant="outline-success" onClick={joinEvent}>Únete!</Button>
        </div>
    )
}

export default JoinForm