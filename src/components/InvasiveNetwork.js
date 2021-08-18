import {ForceGraph2D, ForceGraph3D} from "react-force-graph";
import React, {Component} from "react";
import {Typography} from "@material-ui/core";
import axiosInstance from "../axiosConfig";
import SpriteText from 'three-spritetext';


class InvasiveNetwork extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log(this.props.invasive.name)
        this.graphref = React.createRef()
        this.canvasObject = this.canvasObject.bind(this)
    }

    componentDidMount() {

    }

    canvasObject(node, ctx, globalScale){
        const label = node.name;
        const fontSize = 12/globalScale;
        ctx.font = `${fontSize}px Sans-Serif`;
        const textWidth = ctx.measureText(label).width;
        const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        // ctx.fillStyle = node.color;
        ctx.fillText(label, node.x, node.y);
        node.__bckgDimensions = bckgDimensions;
        console.log(node.id)
    }


    render() {
        let graph;
        if (this.props.graphData !== null){
            graph = <ForceGraph3D
                ref = {this.graphref}
                graphData={this.props.graphData}
                nodeRelSize={4}
                nodeThreeObject={(node) => {
                    const sprite = new SpriteText(node.name)
                    sprite.color = "#5AF575";
                    sprite.textHeight = 9;
                    return sprite
                }
                }
            />
        } else {
            graph = <Typography>
                {"waiting on invasive species selection..."}
            </Typography>
        }
        if (this.graphref.current !== null){
            const fg = this.graphref.current
            fg.d3Force('link').distance(400)
        }

        return (
            <div width="80%">
                {graph}
            </div>


    );
    }
}

export default InvasiveNetwork