import {ForceGraph2D, ForceGraph3D} from "react-force-graph";
import React, {Component} from "react";
import {Typography} from "@material-ui/core";
import axiosInstance from "../axiosConfig";


class InvasiveNetwork extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log(this.props.invasive.name)
        this.graphref = React.createRef()
    }

    componentDidMount() {

    }



    render() {
        let graph;
        if (this.props.graphData !== null){
            graph = <ForceGraph3D
                ref = {this.graphref}
                graphData={this.props.graphData}
                nodeRelSize={4}
            />
        } else {
            graph = <Typography>
                {"waiting on invasive species selection..."}
            </Typography>
        }
        if (this.graphref.current !== null){
            const fg = this.graphref.current
            fg.d3Force('link').distance(300)
        }

        return (
            <>
                {graph}
            </>


    );
    }
}

export default InvasiveNetwork