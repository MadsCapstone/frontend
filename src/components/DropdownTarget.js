import React, {Component} from "react";
import {Autocomplete} from "@material-ui/lab";
import {Grid, Switch, TextField, Typography} from "@material-ui/core";


class DropdownTarget extends Component{
    constructor(props) {
        super(props);
        this.state ={
            impacted:true,
            value:"alewife"
        }
        console.log(this.state.impacter_options)
        this.handleOnChangeDropdown = this.handleOnChangeDropdown.bind(this)
        this.handleOnChangeSwitch = this.handleOnChangeSwitch.bind(this)
    }

    handleOnChangeDropdown(e, value, reason){
        this.props.speciesDropdownChange([value,this.state.impacted])
    }

    handleOnChangeSwitch(event){
        if (this.state.impacted == true){
            this.setState({impacted:false})
        }else{
            this.setState({impacted:true})
        }
        this.setState({value:'alewife'})
    }

    render() {
        return(
            <>
                <Grid container>
                    <Grid container item>
                        <Grid item>
                            <Typography>
                                Select by invasive species
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Switch
                                onChange={this.handleOnChangeSwitch}
                                checked={this.state.impacted}
                            />
                        </Grid>
                        <Grid item>
                            <Typography>
                                Select by impacted species
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item>
                        <Grid item xs={5}>
                            <Autocomplete
                                onChange={this.handleOnChangeDropdown}
                                value={this.state.value}
                                options={this.state.impacted ? this.props.impacted_options:this.props.impacter_options}
                                renderInput={(params) => <TextField {...params} label={this.state.impacted ? "Select Impacted Species": "Select Invasive Species"} variant="outlined" />}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </>


        )
    }
}
export default DropdownTarget

