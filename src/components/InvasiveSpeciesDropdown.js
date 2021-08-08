import React, {Component} from "react";
import {TextField, MenuItem} from "@material-ui/core";
import Card from '@material-ui/core/Card';
// import { Card } from '@material-ui/core';
class Dropdown extends Component{
    constructor(props) {
        super(props);

    }
    componentDidMount() {

    }

    render() {
        return(
            <Card>
                <TextField id="select" value="Carp" select>
                    <MenuItem value="Carp">Asian Carp (the worst)</MenuItem>
                    <MenuItem value="Farts">Fart Fish</MenuItem>
                    <MenuItem value="Ass">Ass Fish</MenuItem>
                    <MenuItem value="Donkey">Twenty</MenuItem>
                    <MenuItem value="10">Ten</MenuItem>
                    <MenuItem value="20">Twenty</MenuItem>
                </TextField>
            </Card>

        )
    }
}

export default Dropdown