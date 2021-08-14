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
import {expression} from "mapbox-gl/dist/style-spec/index.es";
import axiosConfig from "../axiosConfig";



class VizOne extends Component{
    constructor(props) {
        super(props);
        this.handleOnDropdownChange = this.handleOnDropdownChange.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.state = {
            defaultPosition: [48.864716, 2.349],
            markerPosition: [48.864716, 2.349],
            center: [44.182205, -84.506836],
            displayData: 'Placeholder data',
            dropDownValue: "Placeholder data",
            line_colors: 'rgba(27, 30, 170, 1)',
            line_width: 1,
            river_details: []
    };
    }
    get_observations(id){
        const data = {species_id: id}
        axiosInstance.post(
            axiosInstance.defaults.baseURL + "/species/observed",
            data
            )
            .then(response =>{
                this.setState({river_details: response.data})
                this.setRiverAttribute()
            })
    }

    handleOnDropdownChange(value) {
        this.setState({dropDownValue: value})
        console.log(value.id)
        console.log(value.name)
        this.get_observations(value.id)
        // this.findWikipediaInformation(value.name)
    }

    setRiverAttribute() {
        // Example of how it needs to look
        // [
        //     "match", //expression operator
        //     ["get", "GNIS_NAME"], //field to get values for
        //     // "Manistee River", 'rgba(255, 0, 0, 1)',
        //     ...river_colors, //list of color combinations by name (River name, color hex)
        //     'rgba(27, 30, 170, 1)' //fallback color
        // ]
        const cache = {
        }

        let linecolorExpression = [
            "match", //expression operator
            ["get", "GNIS_NAME"], //field to get values for
        ]
        if (this.state.river_details.length>0){
            this.state.river_details.forEach((river_detail) => {
                if (!(river_detail.waterbody_name in cache)){
                    linecolorExpression.push(river_detail.waterbody_name, river_detail.color)
                    cache[river_detail.waterbody_name] = river_detail.color
                }
            })
        }else{
            console.log(this.state.dropDownValue.name + " has no observations")
            this.setState({line_colors:linecolorExpression.push('rgba(27, 30, 170, 1)','rgba(27, 30, 170, 1)')})
        }

        //set fallback
        linecolorExpression.push(
            'rgba(27, 30, 170, 1)' //fallback color
        )
        this.setState({line_colors:linecolorExpression})
    }
    // river_details = [
    //     {name: "Manistee River", color: 'rgba(255, 0, 0, 1)'},
    //     {name: "Tittabawassee River", color: "rgba(255, 0, 0, 1)"},
    //     {name: "Whiting Creek", color:"rgba(255, 0, 0, 1)"},
    //     {name: "West Split Rock River", color:"rgba(255, 0, 0, 1)"},
    //     {name:"Elni Lake", color:"rgba(255, 0, 0, 1)"},
    //     {name:"Cass River", color:"rgba(255, 0, 0, 1)"}
    // ]

    handleButtonClick(river_details) {
        this.setRiverAttribute(this.river_details)
    }

    render() {
        return (
            <div className="gridVizOne" flexGrow={1}>
                <Grid container spacing={10}>
                    <Grid item xs={6}>
                        {/*<Button*/}
                        {/*    onClick={this.handleButtonClick}*/}
                        {/*>*/}
                        {/*    {"Change the river colors based on criteria"}*/}
                        {/*</Button>*/}
                        <VizMap
                            center={this.state.center}
                            species={this.state.dropDownValue}
                            line_colors = {this.state.line_colors}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Dropdown
                            padding={10}
                            onDropdownChange={this.handleOnDropdownChange}
                        />
                        {/*<Typography>*/}
                        {/*    {this.state.dropDownValue?.name || ""}*/}
                        {/*</Typography>*/}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default VizOne