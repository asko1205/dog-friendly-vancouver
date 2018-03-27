import React from "react";
import { compose, withStateHandlers } from "recompose";
import {
    Marker,
    InfoWindow
} from "react-google-maps";

const DFMarker = compose(
    withStateHandlers(() => ({
        isOpen: false,
    }), {
        onToggleOpen: ({ isOpen }) => () => ({
            isOpen: !isOpen,
        })
    })
)(props => (
    <Marker
        position={{ lat: props.latitude, lng: props.longitude }}
        onClick={props.onToggleOpen}>
        {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
            <p>{props.description}</p>
        </InfoWindow>}
    </Marker>
));

export default DFMarker;