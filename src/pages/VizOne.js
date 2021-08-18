import React, {Component} from "react";
import Dropdown from '../components/InvasiveSpeciesDropdown'
import {Container, Grid, Paper, Button, Typography, Divider, Padding, Box} from "@material-ui/core";
import axiosInstance from "../axiosConfig";
import VizMap from '../components/Map'
import Hierarchy from "../components/Hierarchy";
import TreeHierarchy from "../components/Hierarchy";
import InvasiveNetwork from "../components/InvasiveNetwork";
import WikiSearchResults from "../components/WikipediaSearch";
import {makeStyles} from "@material-ui/core/styles";
import { sizing } from '@material-ui/system';
import axios from "axios";




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
            graphData: null,
            invasiveWikiPage:null,
            invasiveWikiPageDetail:null
        };
    }

    get_network_by_invasive = async (id) => {
        try {
            const response = await axiosInstance.post(
                axiosInstance.defaults.baseURL + "/species/impact",
                {species_id: id}

            )
            console.log(response)
            this.setState({graphData: response.data})

        } catch (err) {
            console.log(err)
        } finally {

        }

    }

    get_wikipedia_summary_page(title){
        console.log("Going to look for the page by title " +title)
        let response;
        let config = {
            headers:{
                "Content-Type": "application/json"
            }
        }

        axios.get(
            "https://en.wikipedia.org/api/rest_v1/page/summary/"+encodeURI(title),
        ).then(response=>{
            console.log(response)
            this.setState({invasiveWikiPageDetail:response})
        })

    }

    get_wikipedia_invasive_search (name){
        console.log("Calling wikipedia to search for " +name)
        let params = {
            action:"query",
            list:"search",
            srsearch:name,
            format:"json",
            origin:"*"
        }
        let config = {
            headers:{
                "Content-Type": "application/json"
            }
        }
        axios.get(
            "https://en.wikipedia.org/w/api.php",
            {params},
            {config}
        ).then(response=>{
                console.log(response.data.query.search)
                this.get_wikipedia_summary_page(response.data.query.search[0].title)
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
            this.get_wikipedia_invasive_search(value.name)
        }else{
            console.log("the dropdown value is null")
        }

        // this.findWikipediaInformation(value.name)
    }

    setRiverAttribute() {
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
            this.setState({line_colors:linecolorExpression.push("",'rgba(27, 30, 170, 1)')})
        }

        //set fallback
        linecolorExpression.push(
            'rgba(27, 30, 170, 1)' //fallback color
        )
        this.setState({line_colors:linecolorExpression})
    }

    handleButtonClick() {

    }

    render() {
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item container xs={7} spacing={3}>
                        <Grid item xs={6}>
                            <Typography variant={"h3"}>
                                Map of Invasive Impact
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant={"body2"}>
                                <div>
                                    This visualization shows where an invasive species has been spotted and allows you to see on a map
                                    which rivers have potential to be infected from that sighting data. There may be several sightings for
                                    a given invasive species.
                                </div>
                                <br/>
                                <div>
                                    Blue lines represent the waterways provided by the National Hydrological Dataset (NHD).
                                    This dataset is maintained by the United States Geological Survey (USGS) organization. Red -> Yellow lines are the
                                    impacted areas and the colors scale from red -> yellow based on 1 -> n stream connection order.
                                </div>
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <VizMap
                                center={this.state.center}
                                species={this.state.dropDownValue}
                                line_colors = {this.state.line_colors}
                            />
                            {/*<Paper height={"75vh"}>Map Viz</Paper>*/}
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Divider variant={"middle"} orientation={"vertical"}/>
                    </Grid>
                    <Grid item continer xs={4}>
                        <Grid item container spacing={3}>
                            <Grid item xs={6}>
                                <Typography variant={"h5"}>
                                    Select Invasive Species
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Dropdown
                                    onDropdownChange={this.handleOnDropdownChange}
                                />
                                {/*<Button onClick={this.handleButtonClick}>Hit Wiki</Button>*/}
                            </Grid>
                            <Grid item xs={12}>
                                <WikiSearchResults
                                    invasive={this.state.dropDownValue}
                                    invasiveWikiPageDetails={this.state.invasiveWikiPageDetail}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item container spacing={3}>
                        <Grid item xs={12}>
                            <Divider variant={"middle"} style={{width:'100%'}}/>
                        </Grid>
                    </Grid>
                    <Grid item container spacing={3}>
                        <Grid item container>
                            <Grid item xs={6}>
                                <Typography variant={"h3"}>
                                    Invasive Species Network
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container>
                            <Grid item xs={9}>
                                <InvasiveNetwork
                                    invasive = {this.state.dropDownValue}
                                    graphData = {this.state.graphData}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default VizOne