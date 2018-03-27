import React from "react";
import DFMarker from "../DFMarker/DFMarker";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap
} from "react-google-maps";

const Map = compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyDzZurSP3E9szvUVtvwWlgcg-s7iF82SIM&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `40rem` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap defaultZoom={12} defaultCenter={{ lat: 49.28, lng: -123.12 }}>
        <DFMarker latitude={49.29} longitude={-123.12} description={"test"} />
        <DFMarker latitude={49.27} longitude={-123.12} description={"test2"} />
    </GoogleMap>
));

export default Map;