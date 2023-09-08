import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import Geocode from "react-geocode";
import "./autocomplete-styles.css";

const Autocomplete = ({ eventData, setEventData }) => {

    const [place, setPLace] = useState()

    const itemStyle = {
        color: "black",
    };

    Geocode.setApiKey(import.meta.env.VITE_APP_GOOGLE_KEY)

    place && Geocode
        .fromAddress(place.label)
        .then((response) => {
            const { lat, lng } = response.results[0].geometry.location
            setEventData({ ...eventData, location: { type: 'Point', coordinates: [lng, lat] }, address: place.label })
            setPLace(undefined)
        },
            (error) => {
                console.error(error);
            }
        );

    return (

        <div style={{ color: "black" }}>
            <GooglePlacesAutocomplete
                selectProps={{
                    place,
                    onChange: setPLace,

                }}
                apiKey={import.meta.env.VITE_APP_GOOGLE_KEY}

            />
        </div>
    )
}

export default Autocomplete;