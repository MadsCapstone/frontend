import ReactDOM from "react-dom";
import React, {useState, useEffect, Component} from "react";
import {Card, CardContent, CardHeader, CardMedia, Typography} from "@material-ui/core";
import axios from "axios";
import Divider from "@material-ui/core/Divider";
import michigan_logo from "../assets/michigan_logo.png"
import DefaultCard from "./DefaultWikiCard";


class WikiSearchResults extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let card;
        if (this.props.invasiveWikiPageDetails!==null){
               card = (
                   <Card variant={"outlined"}>
                    <CardHeader
                        title={"Invasive Species Name: "+this.props.invasive.name}
                        subheader={"Description: "+ this.props.invasiveWikiPageDetails.data.description}
                    />
                    <CardMedia
                        component={"img"}
                        alt={michigan_logo}
                        className={"wiki-card-media"}
                        image={this.props.invasiveWikiPageDetails.data ? this.props.invasiveWikiPageDetails.data.thumbnail.source:""}
                        title={"A title"}
                    />
                    <Divider variant={"middle"}/>
                    <CardContent>
                        <Typography variant={"body2"}>
                            {this.props.invasiveWikiPageDetails.data.extract}
                        </Typography>
                    </CardContent>
                </Card>
               );
        } else {
            card = <DefaultCard/>
        }
        return (
            <>
                {card}
            </>

        )
    }
}

export default WikiSearchResults