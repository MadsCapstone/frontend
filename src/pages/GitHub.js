import React, {Component} from "react";
import home_page_logo from "../assets/home_page_logo.png"
import {Redirect, Switch, Route} from "react-router-dom";

class GitHub extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Route exact path={"/project/Github"} render={()=>{window.location = "https://github.com/MadsCapstone"}}/>
            </>
            // <Switch>
            //     <Redirect from={'https://the-ripple-effect.app/project/GitHub'} to={"https://github.com/MadsCapstone"}/>
            // </Switch>

        )
    }
}

export default GitHub
