import { useContext, useState } from "react"
import InstrumentsForm from "../InstrumentsForm/InstrumentsForm"
import { Button } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.context"
import { useNavigate, useParams } from "react-router-dom"
import eventsservice from "../../services/events.services"



const JoinForm = () => {

    const navigate = useNavigate()

    const { loggedUser } = useContext(AuthContext)
    const { event_id } = useParams()
    const [signupData, setSignupData] = useState({
        instruments: []

    })

    console.log('------', event_id)
    const joinEvent = e => {
        eventsservice
            .joinEvent(event_id, loggedUser._id, signupData)
            .then(() => navigate(`/events`))
            .catch(err => console.log(err))

    }



    return (
        <>
            <InstrumentsForm signupData={signupData} setSignupData={setSignupData} />
            <Button variant="outline-success" onClick={() => joinEvent()}>Únete!</Button>
        </>
    )
}

export default JoinForm