import React, {Component} from "react";
import home_page_logo from "../assets/home_page_logo.png"
import {Redirect, Switch} from "react-router-dom";

class GitHub extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"github-parent"}>
                <div className={"github-container"}>
                    <a href={"https://github.com/MadsCapstone"}><img src={home_page_logo} /></a>
                </div>
            </div>
            // <Switch>
            //     <Redirect from={'https://the-ripple-effect.app/project/GitHub'} to={"https://github.com/MadsCapstone"}/>
            // </Switch>

        )
    }
}

export default GitHub
