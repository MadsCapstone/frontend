import React, {Component} from "react";
import Dropdown from '../components/InvasiveSpeciesDropdown'
import {Container, Grid, Paper, Button, Typography, Divider, Padding} from "@material-ui/core";
import axiosInstance from "../axiosConfig";
import VizMap from '../components/Map'
import Hierarchy from "../components/Hierarchy";
import TreeHierarchy from "../components/Hierarchy";
import InvasiveNetwork from "../components/InvasiveNetwork";

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
            river_details: [],
            graphData: null
        };
    }

    get_network_by_invasive(id){
        axiosInstance.post(
            axiosInstance.defaults.baseURL + "/species/impact",
            {species_id: id}
        ).then((response) => {
                console.log(response)
                this.setState({graphData: response.data})
            }
        )
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
        if (value !== null){
            this.setState({dropDownValue: value})
            this.get_observations(value.id)
            this.get_network_by_invasive(value.id)
        }else{
            console.log("the dropdown value is null")
        }

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

    handleButtonClick(river_details) {
        this.setRiverAttribute(this.river_details)
    }

    render() {
        return (
            <div className="gridVizOne" flexGrow={1}>
                <Grid container spacing={10}>
                    <Grid item xs={6}>
                        <VizMap
                            center={this.state.center}
                            species={this.state.dropDownValue}
                            line_colors = {this.state.line_colors}
                        />
                    </Grid>
                    <Divider/>
                    <Grid item xs={6}>
                        <Dropdown
                            padding={10}
                            onDropdownChange={this.handleOnDropdownChange}
                        />

                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant={"h3"}>
                            {"Invasive Network"}
                        </Typography>
                        <InvasiveNetwork
                            invasive = {this.state.dropDownValue}
                            graphData = {this.state.graphData}
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default VizOne