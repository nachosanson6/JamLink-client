import React, { useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import SpinnerComponent from '../Spinner/Spinner';


const containerStyle = {
    // width: '440px',
    height: '500px'
};




const Mapper = (location, label) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCIkt_MWj32EbnKrxghvdDSFRzxDfC4uMs"
    })

    console.log('tamañoooooooo', location.length)

    if (location.length > 1) {
        const center = {
            lat: location.location[0].location.coordinates[1],
            lng: location.location[0].location.coordinates[0]
        }
        const [map, setMap] = React.useState(null)
        const [markerPosition, setMarkerPosition] = useState(center)

        const onLoad = React.useCallback(function callback(map) {
            const bounds = new window.google.maps.LatLngBounds(center);
            map.fitBounds(bounds);

            setMap(map)
        }, [center])

        const onUnmount = React.useCallback(function callback(map) {
            setMap(null)
        }, [])

        return isLoaded ? (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                onLoad={onLoad}
                onUnmount={onUnmount}

            >
                <Marker position={markerPosition} label={location.label} />


                <></>
            </GoogleMap>
        ) : <></>

    } else {
        console.log('trtrtrtr', location.location[0].coordinates[1])
        const center = {
            lat: location.location[0].coordinates[1],
            lng: location.location[0].coordinates[0]
        }

        const [map, setMap] = React.useState(null)
        const [markerPosition, setMarkerPosition] = useState(center)

        const onLoad = React.useCallback(function callback(map) {
            const bounds = new window.google.maps.LatLngBounds(center);
            map.fitBounds(bounds);

            setMap(map)
        }, [center])

        const onUnmount = React.useCallback(function callback(map) {
            setMap(null)
        }, [])
        if (!location) {
            return <SpinnerComponent />
        }
        return isLoaded ? (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                onLoad={onLoad}
                onUnmount={onUnmount}

            >
                <Marker position={markerPosition} label={location.label} />


                <></>
            </GoogleMap>
        ) : <></>
    }
}

export default Mapper