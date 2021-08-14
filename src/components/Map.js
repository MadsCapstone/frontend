import React, {Component} from "react";
import {MapContainer, TileLayer, GeoJSON} from "react-leaflet";
import VizOne from "../pages/VizOne";
import axiosConfig from "../axiosConfig";
import {Padding, Typography} from "@material-ui/core";
import ReactMapGL, {Layer, Marker, Source} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
mapboxgl.accessToken = 'pk.eyJ1IjoiZWJpenV3byIsImEiOiJja3M5bTI4OGYyYzNlMnVwaWdnZWtkcTNjIn0.eeJKh9vdRsCPsZ-9-maSaA'

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZWJpenV3byIsImEiOiJja3M5bTI4OGYyYzNlMnVwaWdnZWtkcTNjIn0.eeJKh9vdRsCPsZ-9-maSaA'

class VizMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: -84.189123,
            lat: 43.386668,
            zoom: 7,
            viewport:{
                latitude: 43.386668,
                longitude: -84.189123,
                zoom: 6,
                bearing: 0,
                pitch: 0
            }
        }
    }

    get_species_data(){
        axiosConfig.get(axiosConfig.defaults.baseURL + '')

    }

    componentDidMount() {

    }



    render() {
        const source_style = {
            url:"mapbox://ebizuwo.bsbjdd4z",
            type:"vector",
            id:"rivers_filtered"
        }

        const river_layer_style = {
            id:'rivers-filtered',
            "source-layer":"rivers_filtered",
            type:'line',
            paint:{
                //set from parent component VizOne
                "line-color": this.props.line_colors,
                "line-width": ["match",
                    ["get", "line-color"],
                    'rgba(27, 30, 170, 1)',
                    1,
                    2
                ]
            },
        }
        return (
            <div>
                {/*<Typography>*/}
                {/*    {this.props.species?.name || ""}*/}
                {/*</Typography>*/}
                {/*<Typography>*/}
                {/*    {this.props.line_colors}*/}
                {/*</Typography>*/}
                <ReactMapGL
                    {...this.state.viewport}
                    mapStyle={'mapbox://styles/ebizuwo/cks9m3tra10dk18npmm7j1soc'}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                    onViewportChange={viewport => this.setState({viewport})}
                    width="50vw"
                    height="75vh"
                >
                    <Source {...source_style}>
                        <Layer {...river_layer_style}/>
                    </Source>
                </ReactMapGL>
            </div>
        )
    }
}

export default VizMap
