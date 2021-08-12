import React, {Component} from "react";
import {MapContainer, TileLayer, GeoJSON} from "react-leaflet";
import VizOne from "../pages/VizOne";
import axiosConfig from "../axiosConfig";
import {Typography} from "@material-ui/core";


class VizMap extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log(this.props.species)
    }

    get_species_data(){
        axiosConfig.get(axiosConfig.defaults.baseURL + '')
    }



    render() {
        return (
            <div>
                <Typography>
                    {this.props.species?.name || ""}
                </Typography>
                <MapContainer
                    className="map-container"
                    center={this.props.center}
                    zoom={8}
                    scrollWheelZoom={false}>
                    {/*<TileLayer*/}
                    {/*    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'*/}
                    {/*    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"*/}
                    {/*/>*/}
                    <TileLayer
                        url = "https://maptiles.the-ripple-effect.app/data/rivers-and-lakes/#{z}/{x}/{y}.pbf"
                        attribution = 'Ermias Bizuwork'
                    />
                </MapContainer>
            </div>
        )
    }
}

export default VizMap
