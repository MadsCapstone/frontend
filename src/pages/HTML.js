import React from "react";
import {Helmet} from "react-helmet";
import Navigation from "../components/Navigation";

class HelmetHead extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <html>
            <head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                    integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                    crossOrigin=""
                />
                <link href="https://api.mapbox.com/mapbox-gl-js/v2.4.0/mapbox-gl.css" rel="stylesheet"/>
            </head>
            <body>
            <div id="content">
                <Navigation/>
            </div>
            </body>
            </html>
        );
    }
}

export default HelmetHead