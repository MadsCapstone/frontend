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
import {Container, Grid, Paper, Button, Typography, Divider, Padding} from "@material-ui/core";
import axiosInstance from "../axiosConfig";
import VizMap from '../components/Map'



class VizOne extends Component{
    constructor(props) {
        super(props);
        this.handleOnDropdownChange = this.handleOnDropdownChange.bind(this)
        this.state = {
            defaultPosition: [48.864716, 2.349],
            markerPosition: [48.864716, 2.349],
            center: [44.182205, -84.506836],
            displayData: 'Placeholder data',
            dropDownValue: "Placeholder data"
        };
    }

    handleOnDropdownChange(value) {
        this.setState({dropDownValue: value})
    }

    render() {
        return (
            <Grid container spacing={5}>
                <Grid item xs>
                    <VizMap
                        center={this.state.center}
                        species={this.state.dropDownValue}
                    />
                </Grid>
                <Grid item xs>
                    <Dropdown
                        padding={10}
                        onDropdownChange={this.handleOnDropdownChange}
                    />
                    <Typography>
                        {this.state.dropDownValue?.name || ""}
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default VizOne