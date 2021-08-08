import React, {Component} from "react";
import {
    MapContainer,
    Map,
    TileLayer,
    FeatureGroup,
    Marker,
    Popup,
    Circle,
    CircleMarker,
    Polyline,
    Polygon,
    Rectangle
} from 'react-leaflet';
import Dropdown from '../components/InvasiveSpeciesDropdown'
import {Container, Grid, Paper} from "@material-ui/core";

const center = [44.182205, -84.506836]


class VizOne extends Component{
    constructor(props) {
        super(props);
        this.state = {
            defaultPosition: [48.864716, 2.349],
            markerPosition: [48.864716, 2.349],
            center: [44.182205, -84.506836]
        }
    }

    render() {
        return (
            <Grid container spacing={5}>
                <Grid item xs>
                    <MapContainer className="map-container" center={this.state.center} zoom={8} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </MapContainer>
                </Grid>
                <Grid item xs>
                    <div className="paper-vizone">
                        <Paper variant="outlined">
                            <Dropdown/>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        )
    }
}

export default VizOne