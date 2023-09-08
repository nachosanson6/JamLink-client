import React, { useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import SpinnerComponent from '../Spinner/Spinner';
import './marker.css'
import marker from './../../assets/images/marker.png'
import mapStyle from '../../utils/mapStyle';



const Mapper = ({ location, label }) => {

    const containerStyle = {
        // width: '440px',
        height: '500px'
    };

    if (!location) {
        return <SpinnerComponent />
    }

    const markerCenter = location.map(elm => {
        return { lat: elm.coordinates[1], lng: elm.coordinates[0] }
    })

    const markerLabel = label.map(elm => {
        return elm
    })

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE
    })

    const center = {
        lat: location[0].coordinates[1],
        lng: location[0].coordinates[0]
    }

    const [map, setMap] = React.useState(null)
    const [markerPosition, setMarkerPosition] = useState(center)

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            options={{ styles: mapStyle }}


        >
            {markerCenter.map((eachMarker, idx) => {
                return (
                    <Marker key={idx}
                        position={eachMarker}
                        icon={{ url: marker, scaledSize: new window.google.maps.Size(70, 55) }}
                        label={{
                            text: markerLabel[idx],
                            className: 'marker-label',
                            pixelOffset: new window.google.maps.Size(-15, -15) // Ajusta el desplazamiento para alinear el centro
                        }}
                    />

                )
            })}


            <></>
        </GoogleMap>
    ) : <></>


}

export default Mapper