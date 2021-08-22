import React, {Component} from "react";
import backgroundVideo from "../assets/master_1.webm"
import {Button, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import logo from "../assets/home_page_logo.png"
import {Link, Route, Switch} from 'react-router-dom';
import Navigation from "../components/Navigation";


class Home extends Component{
    render() {
        return (
            <>
                <body>
                <video autoPlay loop muted id={'video'}>
                    <source src={backgroundVideo}/>
                </video>
                <div className={"header-container"}>

                    <div className="content_logo">
                        <img src={logo} id={"logo_img_home"}/>
                        <div className={"enter_project_button_div"}>
                            <Button style={{color:"primary"}} component={Link} to={"/project/Blog"} variant="contained" color={"primary"}>Enter Project</Button>
                        </div>
                    </div>

                </div>
                <div>
                </div>
                </body>
            </>

        )
    }
}
export default Home
