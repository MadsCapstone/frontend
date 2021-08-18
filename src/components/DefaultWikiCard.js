import React, {Component} from "react";
import {Card, CardContent, CardHeader, CardMedia} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import michigan_logo from "../assets/michigan_logo.png"

class DefaultCard extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Card variant={"outlined"}>
                <CardHeader
                    title={"This is an invasive Species Name"}
                    subheader={"This is a subtitle and such"}
                />
                <CardMedia
                    component={"img"}
                    alt={"michigan_logo"}
                    className={"wiki-card-media"}
                    image={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Tolstolobec_pestr%C3%BD.jpg/220px-Tolstolobec_pestr%C3%BD.jpg"}
                    title={"A title"}
                />
                <Divider variant={"middle"}/>
                <CardContent>
                    <Typography variant={"body2"}>
                        This is a summary section for invasive species
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default DefaultCard