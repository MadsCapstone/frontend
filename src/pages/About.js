import React, {Component} from "react";
import {Grid, Paper, Box} from "@material-ui/core";

class About extends Component{
    render() {
        return(
            <>
                <div className={"about-container-parent"}>
                    <div className={"about-container"}>
                        <Grid container spacing={6}>
                            <Grid item xs={12}>
                                <Paper className={"about-container-paper"} elevation={20}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={4}>
                                            <Paper elevation={20} className={"about-photo-div"}>
                                                photo
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Paper elevation={20} className={"about-details-div"}>
                                                details
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={"about-container-paper"} elevation={20}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={4}>
                                            <Paper elevation={20}>Photo</Paper>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Paper elevation={20}>Details</Paper>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={"about-container-paper"} elevation={20}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={4}>
                                            <Paper elevation={20}>Photo</Paper>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Paper elevation={20}>Details</Paper>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </>
        )
    }
}

export default About