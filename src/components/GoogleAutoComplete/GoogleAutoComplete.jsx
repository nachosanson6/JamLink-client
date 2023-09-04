import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import Geocode from "react-geocode"

const Component = ({ eventData, setEventData }) => {

    const [place, setPLace] = useState()

    Geocode.setApiKey("AIzaSyCIkt_MWj32EbnKrxghvdDSFRzxDfC4uMs")

    place && Geocode.fromAddress(place.label).then(
        (response) => {
            const { lat, lng } = response.results[0].geometry.location;
            setEventData({ ...eventData, location: { type: 'Point', coordinates: [lng, lat] }, address: place.label })
        },
        (error) => {
            console.error(error);
        }
    );

    return (

        <div>
            <GooglePlacesAutocomplete
                selectProps={{
                    place,
                    onChange: setPLace

                }}

                apiKey="AIzaSyCIkt_MWj32EbnKrxghvdDSFRzxDfC4uMs"
            />
        </div>
    )
}

export default Component;