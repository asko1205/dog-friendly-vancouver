import React from "react";
import { compose, withProps, withStateHandlers } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";

const Map = compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyDzZurSP3E9szvUVtvwWlgcg-s7iF82SIM&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `40rem` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withStateHandlers(() => ({
        isOpen: false,
    }), {
        onToggleOpen: ({ isOpen }) => () => ({
            isOpen: !isOpen,
        })
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap defaultZoom={12} defaultCenter={{ lat: 49.28, lng: -123.12 }}>
        {props.isMarkerShown && (
            <Marker
                position={{ lat: 49.29, lng: -123.12 }}
                onClick={props.onToggleOpen}>
                    {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
                        <p>This restaurant is dog friendly!</p>
                    </InfoWindow>}
            </Marker>
        )}
    </GoogleMap>
));

export default Map;