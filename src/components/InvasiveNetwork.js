import {ForceGraph2D, ForceGraph3D} from "react-force-graph";
import React, {Component} from "react";
import {Typography} from "@material-ui/core";
import axiosInstance from "../axiosConfig";
import SpriteText from 'three-spritetext';
import * as THREE from 'three';
import { CSS2DRenderer, CSS2DObject } from 'three-css2drender'

class InvasiveNetwork extends Component{
    constructor(props) {
        super(props);
        this.state = {
            highlightLinks: new Set(),
            highlightNodes: new Set(),
            hoverNode:null
        }
        console.log(this.props.invasive.name)
        this.graphref = React.createRef()
        this.canvasObject = this.canvasObject.bind(this)
        this.paintRing = this.paintRing.bind(this)
        this.handleNodeHover = this.handleNodeHover.bind(this)
        this.handleLinkHover = this.handleLinkHover.bind(this)

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

    highlightLinks=new Set();
    highlightNodes=new Set();
    NODE_R = 8;

    updateHighlight = () => {
        this.setState({highlightNodes:this.highlightNodes});
        this.setState({highlightLinks:this.highlightLinks});
    };

    handleNodeHover (node){
        this.highlightNodes.clear();
        this.highlightLinks.clear();
        if (node) {
            this.highlightNodes.add(node);
            node.neighbors.forEach(neighbor => this.highlightNodes.add(neighbor));
            node.links.forEach(link => this.highlightLinks.add(link));
        }

        this.setState({hoverNode:(node || null)});
        this.updateHighlight();
    };

    handleLinkHover (link) {
        this.highlightNodes.clear();
        this.highlightLinks.clear();

        if (link) {
            this.highlightLinks.add(link);
            this.highlightNodes.add(link.source);
            this.highlightNodes.add(link.target);
        }

        this.updateHighlight();
    };

    paintRing(node, ctx){
        ctx.beginPath();
        ctx.arc(node.x, node.y, this.NODE_R * 1.4, 0, 2 * Math.PI, false);
        ctx.fillStyle = node === this.state.hoverNode ? 'red' : 'orange';
        ctx.fill();
        // this.setState({hoverNode:node})
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
                }}
                nodeThreeObjectExtend={true}
                onNodeDragEnd={node => {
                    node.fx = node.x;
                    node.fy = node.y;
                    node.fz = node.z;
                }}
                linkWidth={link=>this.highlightLinks.has(link) ? 5:1}
                linkDirectionalParticleWidth={link => this.highlightLinks.has(link) ? 4 : 0}
                nodeCanvasObjectMode={node => this.highlightNodes.has(node) ? 'before' : undefined}
                nodeCanvasObject={this.paintRing}
                onNodeHover={this.handleNodeHover}
                onLinkHover={this.handleLinkHover}
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
            <div className={"invasive-network-parent"}>
                <div className={"invasive-network"}>
                    {graph}
                </div>
            </div>



    );
    }
}

export default InvasiveNetwork