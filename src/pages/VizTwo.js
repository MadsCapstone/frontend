import React, {Component} from "react";
import RipplePlot from "../components/RipplePlot";
import {Grid} from "@material-ui/core";
import axiosInstance from "../axiosConfig";
import DropdownTarget from "../components/DropdownTarget";

class VizTwo extends Component{
    constructor(props) {
        super(props);
        this.state={
            data:'this is some data',
            impacter_options:[],
            impacted_options:[],
            dropdownValue:null
        }
        this.handleDropdownChange = this.handleDropdownChange.bind(this)

    }

    get_ripple_plot_data(value){
        let params ={
            name:value[0],
            query_type:value[1] ? "impacted":"impacter"
        }
        axiosInstance.post(
            axiosInstance.defaults.baseURL + "/species/targetimpactrel",
            params
        ).then(response=> {
                console.log(response.data)
                response.data['type']='scatterpolar'
                let data = [response.data]
                console.log(data)
                this.setState({data:data})
            }
        )
    }

    get_dropdown_data(){
        axiosInstance.get(
            axiosInstance.defaults.baseURL + "/species/targetinvasive"
        ).then(response=> {
                console.log(response.data)
                this.setState({impacter_options:response.data.impacter})
            }
        )
        axiosInstance.get(
            axiosInstance.defaults.baseURL + "/species/targetimpacted"
        ).then(response=> {
                console.log(response.data)
                this.setState({impacted_options:response.data.impacted})
            }
        )
    }

    handleDropdownChange(value){
        this.setState({dropdownValue:value})
        this.get_ripple_plot_data(value)
    }

    componentDidMount() {
        this.get_dropdown_data()
    }


    render() {
        return (
            <div>
                <Grid conatiner spacing={3}>
                    <Grid container item>

                    </Grid>
                    <Grid container item>
                        <DropdownTarget
                            impacter_options={this.state.impacter_options}
                            impacted_options={this.state.impacted_options}
                            speciesDropdownChange={this.handleDropdownChange}
                        />
                    </Grid>
                </Grid>
                <Grid container item>
                    <Grid container item>
                        <RipplePlot
                            data={this.state.data}
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default VizTwo