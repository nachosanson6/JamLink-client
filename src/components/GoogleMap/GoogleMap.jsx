import React, { useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
    // width: '440px',
    height: '300px'
};




const MyComponent = (location) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCIkt_MWj32EbnKrxghvdDSFRzxDfC4uMs"
    })


    const center = {
        lat: location.location.coordinates[1],
        lng: location.location.coordinates[0]
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
            <Marker position={markerPosition} />


            <></>
        </GoogleMap>
    ) : <></>
}

export default MyComponent