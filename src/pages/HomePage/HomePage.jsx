import { Container } from 'react-bootstrap'
import eventsservice from '../../services/events.services'
import { useEffect, useState } from 'react'
import Mapper from '../../components/GoogleMap/GoogleMap'


const HomePage = () => {

    // const [eventData, setEventData] = useState()

    // useEffect(() => {
    //     getEventData()
    // }, [])


    // const getEventData = () => {
    //     eventsservice
    //         .getAllEvents()
    //         .then(({ data }) => setEventData(data))
    //         .catch(err => console.log(err))
    // }

    return (
        <Container>
            <h1>HomePage</h1>
            {/* <Mapper location={eventData} /> */}
        </Container>
    )
}

export default HomePage