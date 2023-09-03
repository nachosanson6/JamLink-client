import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const Component = () => {

    const [place, setPLace] = useState()
    console.log(place)
    return (

        <div>
            <GooglePlacesAutocomplete
                selectProps={{
                    place,
                    onChange: setPLace

                }}
                autocompletionRequest={{
                    bounds: [
                        { lat: 50, lng: 50 },
                        { lat: 100, lng: 100 }
                    ],
                }}
                apiKey="AIzaSyCIkt_MWj32EbnKrxghvdDSFRzxDfC4uMs"
            />
        </div>
    )
}

export default Component;