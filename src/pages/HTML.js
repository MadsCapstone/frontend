import React from "react";
import {Helmet} from "react-helmet";
import Navigation from "../components/Navigation";

class HelmetHead extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <Helmet>
                <title>{"The Ripple Effect"}</title>
                <link rel="icon" type="image/png" href="michigan_logo_32.png" sizes="32x32" />
                <link href="https://api.mapbox.com/mapbox-gl-js/v2.4.0/mapbox-gl.css" rel="stylesheet"/>
            </Helmet>
        );
    }
}

export default HelmetHead