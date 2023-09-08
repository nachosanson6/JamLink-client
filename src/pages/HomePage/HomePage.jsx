import { Container } from 'react-bootstrap'
import eventsservice from '../../services/events.services'
import { useContext, useEffect, useState } from 'react'
import Mapper from '../../components/GoogleMap/GoogleMap'
import SpinnerComponent from '../../components/Spinner/Spinner'
import logoDark from './../../assets/images/logoDark.png'

import './../HomePage/HomePage.css'
import { ThemeContext } from '../../contexts/theme.context'




const HomePage = () => {

    const { theme, switchTheme } = useContext(ThemeContext)
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
            {
                !allLocation
                    ?
                    <SpinnerComponent />

                    :
                    <div className='homepage align-items-center mb-5'>
                        <img src={logoDark} />
                        <Mapper location={allLocation} label={markerLabel} />
                    </div>

            }
        </Container>
    )
}

export default HomePage