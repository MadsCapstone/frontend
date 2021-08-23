import React, {Component} from "react";
import {Card, CardContent, CardHeader, CardMedia, Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import DefaultCard from "./DefaultWikiCard";
import question_mark from "../assets/question_mark.jpeg"


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
                        alt={question_mark}
                        className={"wiki-card-media"}
                        image={this.props.invasiveWikiPageDetails.data.thumbnail ? this.props.invasiveWikiPageDetails.data.thumbnail.source: question_mark}
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