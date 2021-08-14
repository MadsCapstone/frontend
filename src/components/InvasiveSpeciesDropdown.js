import React, {Component} from "react";
import {TextField, MenuItem, Card} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import axiosInstance from "../axiosConfig";

// import { Card } from '@material-ui/core';
class Dropdown extends Component{
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this)
        this.state = {
            options: [{id:1, name:'option 1'}, {id:2, name:'option 2'}]
        }

    }
    get_invasive_list() {
        let data = null
        axiosInstance.get(axiosInstance.defaults.baseURL + "/species/invasive")
            .then(response=>{
                this.setState({options: response.data});
                console.log(this.state.options)
        }
        );
        return data
    }

    componentDidMount(){
        this.get_invasive_list()
    }

    handleOnChange(e, value, reason){
        this.props.onDropdownChange(value)
    }

    render() {
        return(
            <Autocomplete
                id="Invasive Species"
                invasiveSpecies
                options={this.state.options}
                onChange={this.handleOnChange}
                getOptionLabel={(option) => option.name}
                style={{ width: '25vw' }}
                renderInput={(params) => <TextField {...params} label="Select Invasive Species" variant="outlined" />}
            />
        )
    }
}

export default Dropdown