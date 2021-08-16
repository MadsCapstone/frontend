import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home'
import VizOne from "../pages/VizOne";
import VizTwo from "../pages/VizTwo";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Video from "../pages/Video";
import FoodWeb from "../pages/FoodWeb"
import HomeIcon from '@material-ui/icons/Home';
import MapIcon from '@material-ui/icons/Map';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import InfoIcon from '@material-ui/icons/Info';
import BookIcon from '@material-ui/icons/Book';
import BlurOnIcon from '@material-ui/icons/BlurOn';


class RouteDef{
    constructor(path, sideBarText, sideBarIcon, mainView) {
        this.path = path
        this.sideBarText = sideBarText
        this.sideBarIcon = sideBarIcon
        this.mainView = mainView
    }
}

const Home_ = {
    path:'/Home',
    sideBarText:'Home',
    sideBarIcon: <HomeIcon/>,
    mainView: <Home/>
}

const VizOne_ = {
    path: '/VizOne',
    sideBarText: 'Vizualization One',
    sideBarIcon: <MapIcon/>,
    mainView: <VizOne/>
}

const VizTwo_ = {
    path: '/VizTwo',
    sideBarText: 'Vizualization Two',
    sideBarIcon: <MapIcon/>,
    mainView: <VizTwo/>
}

const Video_ = {
    path:'/Video',
    sideBarText: 'Video',
    sideBarIcon: <OndemandVideoIcon/>,
    mainView: <Video/>
}

const About_ = {
    path:'/About',
    sideBarText: 'About',
    sideBarIcon: <InfoIcon/>,
    mainView: <About/>
}

const Blog_ = {
    path:'/Blog',
    sideBarText: 'Blog Post',
    sideBarIcon: <BookIcon/>,
    mainView: <Blog/>
}

const FoodWeb_ = {
    path:'/FoodWeb',
    sideBarText: 'Food Web',
    sideBarIcon: <BlurOnIcon/>,
    mainView: <FoodWeb/>
}

const Routes = [
    Home_,
    About_,
    FoodWeb_,
    VizOne_,
    VizTwo_,
    Blog_,
    Video_
]

export default Routes
