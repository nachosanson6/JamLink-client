import Autocomplete from "react-google-autocomplete";

<Autocomplete
    apiKey={"AIzaSyCIkt_MWj32EbnKrxghvdDSFRzxDfC4uMs"}
    style={{ width: "100%" }}
    onPlaceSelected={(place) => {
        console.log(place);
    }}

    defaultValue="Amsterdam"
/>;