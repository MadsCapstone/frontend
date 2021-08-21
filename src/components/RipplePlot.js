import React, {Component} from "react";
import Plot from 'react-plotly.js';


class RipplePlot extends Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }

    componentDidMount() {

    }

    render() {
        return(
            <Plot
                layout={{
                    width: 1000,
                    height:1000,
                    title:'The Ripple Effect of Invasive Species',
                    title_x:0.5,
                    polar: {
                        bgcolor: "white",
                        angularaxis: {
                            visible:false
                        },
                        radialaxis: {
                            linewidth: 0,
                            gridcolor: "lightgray",
                            showticklabels:false,
                            range:[0,3.1],
                            tickvals:[0,1,2,3]
                        }
                    },
                    font:{
                        size:8
                    },
                }}
                data={this.props.data}
            />
        )
    }
}

export default RipplePlot