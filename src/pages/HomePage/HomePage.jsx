import { Container } from 'react-bootstrap'
import eventsservice from '../../services/events.services'
import { useEffect, useState } from 'react'
import Mapper from '../../components/GoogleMap/GoogleMap'
import SpinnerComponent from '../../components/Spinner/Spinner'


const HomePage = () => {

    const [eventData, setEventData] = useState()

    useEffect(() => {
        getEventData()
    }, [])


    const getEventData = () => {
        eventsservice
            .getAllEvents()
            .then(({ data }) => setEventData(data))
            .catch(err => console.log(err))
    }


    const allLocation = eventData?.map(elm => elm.location)
    const markerLabel = eventData?.map(elm => elm.title)

    return (
        <Container>
            <h1>HomePage</h1>
            {
                !allLocation
                    ?
                    <SpinnerComponent />

                    :
                    <Mapper location={allLocation} label={markerLabel} />


            }
        </Container>
    )
}

export default HomePage