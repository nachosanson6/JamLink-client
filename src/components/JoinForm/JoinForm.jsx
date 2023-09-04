import { useContext, useState } from "react"
import InstrumentsForm from "../InstrumentsForm/InstrumentsForm"
import { Button } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.context"
import { useParams } from "react-router-dom"
import eventsservice from "../../services/events.services"



const JoinForm = () => {

    const { loggedUser } = useContext(AuthContext)
    const { event_id } = useParams()

    console.log(loggedUser)

    const [signupData, setSignupData] = useState({
        instruments: []

    })

    const joinEvent = e => {
        eventsservice
            .joinEvent(event_id, loggedUser._id, signupData)
            .then(({ data }) => console.log(data))
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