import React, {Component} from "react";
import Tree from "react-d3-tree";
import org from "../data/org.json"
import { useCallback, useState } from "react";
import {Avatar} from "@material-ui/core";




const containerStyles = {
    width: "100vw",
    height: "75vh"
};



// const renderForeignObjectNode = ({
//                                      nodeDatum,
//                                      toggleNode,
//                                      foreignObjectProps
//                                  }) => (
//     <g>
//         <circle r={15}></circle>
//         {/* `foreignObject` requires width & height to be explicitly set. */}
//         <foreignObject {...foreignObjectProps}>
//             <div style={{ border: "1px solid black", backgroundColor: "#dedede" }}>
//                 <h3 style={{ textAlign: "center" }}>{nodeDatum.name}</h3>
//                 {nodeDatum.children && (
//                     <button style={{ width: "100%" }} onClick={toggleNode}>
//                         {nodeDatum.__rd3t.collapsed ? "Expand" : "Collapse"}
//                     </button>
//                 )}
//             </div>
//         </foreignObject>
//     </g>
// );
//
// export default function TreeHierarchy() {
//     const [translate, containerRef] = useCenteredTree();
//     const nodeSize = { x: 200, y: 200 };
//     const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };
//     return (
//         <div style={containerStyles} ref={containerRef}>
//             <Tree
//                 data={org}
//                 translate={translate}
//                 nodeSize={nodeSize}
//                 renderCustomNodeElement={(rd3tProps) =>
//                     renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
//                 }
//                 orientation="vertical"
//             />
//         </div>
//     );
// }




class CustomNode extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <g>
                <circle r={15}>{"poop"}</circle>
                <Avatar
                    onClick={this.props.toggleNode}
                    style={{width:'200px', height:'200px'}}
                    src={'https://media.istockphoto.com/photos/fish-isolated-with-scales-river-crucian-carp-picture-id1037503798?k=6&m=1037503798&s=612x612&w=0&h=FlUPH5YQw9yiLTf3qBWKmdWvHEBKUK9D_O4gpH89pMI='}
                />
            </g>
        )
    }
}


class Hierarchy extends Component{
    constructor(props) {
        super(props);
        this.state = {
            x:0,
            y:0,
            translate: {x:0, y:0}
        }
        this.getCustomNode.bind(this)
        this.containerRef = React.createRef()
    }

    getTranslate(){
        if (this.containerRef.current !== null){
            const{width, height} = this.containerRef.current.getBoundingClientRect()
            return {x: width / 2, y: height / 2}
        }
    }

    // where we create the custom node
    getCustomNode(nodeDatum, toggleNode, customNodeProps){
        return (
            // <CustomNode
            //     nodeDatum={nodeDatum}
            //     toggleNode={toggleNode}
            //     customNodeProps={customNodeProps}
            // />
            <g>
                <circle r={15}>{"poop"}</circle>
                <Avatar
                    onClick={this.props.toggleNode}
                    style={{width:'200px', height:'200px'}}
                    src={'https://media.istockphoto.com/photos/fish-isolated-with-scales-river-crucian-carp-picture-id1037503798?k=6&m=1037503798&s=612x612&w=0&h=FlUPH5YQw9yiLTf3qBWKmdWvHEBKUK9D_O4gpH89pMI='}
                />
            </g>
        )
    }


    render() {
        const customNodeProps = this.props.customNodeProps
        const translate = this.getTranslate()
        const nodeSize = { x: 200, y: 200 };
        return(
            <div style={containerStyles} ref={this.containerRef}>
                <Tree
                    data={org}
                    // translate={translate}
                    nodeSize={nodeSize}
                    orientation="vertical"
                    renderCustomNodeElement={(rd3tNodeProps => {
                        this.getCustomNode({...rd3tNodeProps, customNodeProps})
                    })}
                />
            </div>
        )
    }
}
export default Hierarchy