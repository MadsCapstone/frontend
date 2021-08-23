import React, {Component} from "react";
import {Grid, Paper, Box} from "@material-ui/core";
import rob_pic from "../assets/rob_pic.JPG"
import Typography from "@material-ui/core/Typography";
import ermias_pic from "../assets/ermias_photo_1.png";
import toby_pic from "../assets/toby_pic.png"

class AboutSection extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper className={"about-container-paper"} elevation={20}>
                <Grid container spacing={3} className={"about-container-paper-grid"} background={this.props.main_style}>
                    <Grid item xs={4}>
                        <Paper elevation={20} className={"about-photo-div"} background={this.props.photo_style}>
                            <img src={this.props.pic} style={this.props.img_style}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper elevation={20} className={"about-details-div"} style={this.props.details_style}>
                            <Grid container spacing={3}>
                                <Grid item xs={7}>
                                    <Typography variant={"h3"}>
                                        {this.props.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography variant={"h6"}>
                                        {this.props.title}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    {this.props.bio}
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        );
    }

}

class About extends Component{
    render() {
        return(
            <>
                <div className={"about-container-parent"}>
                    <div className={"about-container"}>
                        <Grid container spacing={6}>
                            <Grid item xs={12}>
                                <AboutSection
                                    pic={ermias_pic}
                                    img_style={{width:"80%"}}
                                    name = {"Ermias Bizuwork"}
                                    title={"Chief Technology Officer"}
                                    main_style={{backgroundColor:"black"}}
                                    bio={"Ermias Bizuwork is a product manager and a lover of software and engineering. He helps deliver products for three development teams making mobile, web frontend, and backend products in supply chain. He enjoys tinkering with all things technology software, hardware, and 3d printing. Hobbies include fishing, hunting, backpacking, fitness, and long distance running."}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <AboutSection
                                    pic={rob_pic}
                                    img_style={{width: "75%"}}
                                    name={"Robert Bowman"}
                                    title={"Chief Marketing Officer"}
                                    bio = {"Robert Bowman is a professional commodities trader. He has managed teams to develop high frequency and ultra low latency trading algorithms for market making and arbitrage. Robert has also led the development of an enterprise risk management and compliance system for his firm.  Robert's current trading interests lie in pattern recognition and price prediction."}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <AboutSection
                                    pic={toby_pic}
                                    img_style={{width:"75%"}}
                                    name={"Toby Kemp"}
                                    title={"Chief Product Officer"}
                                    bio={"Toby Kemp is a data scientist at a Japanese law firm with experience in technical editing/translation and training/operations management. His interests include natural language processing, machine learning, complex systems, and agent-based modeling. He reads a lot."}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </>
        )
    }
}

export default About