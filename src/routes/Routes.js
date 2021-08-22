import React from 'react';
import Home from '../pages/Home'
import VizOne from "../pages/VizOne";
import VizTwo from "../pages/VizTwo";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Video from "../pages/Video";
import GitHub from "../pages/GitHub"
import Intro from "../pages/Intro"
import HomeIcon from '@material-ui/icons/Home';
import MapIcon from '@material-ui/icons/Map';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import InfoIcon from '@material-ui/icons/Info';
import BookIcon from '@material-ui/icons/Book';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import GitHubIcon from '@material-ui/icons/GitHub';


class RouteDef{
    constructor(path, sideBarText, sideBarIcon, mainView) {
        this.path = path
        this.sideBarText = sideBarText
        this.sideBarIcon = sideBarIcon
        this.mainView = mainView
    }
}

const Home_ = {
    path:"",
    sideBarText:'Home',
    sideBarIcon: <HomeIcon/>,
    // mainView: <Home/>
}

const Intro_ = {
    path: '/project/Intro',
    sideBarText: 'Introduction',
    sideBarIcon: <MapIcon/>,
    mainView: <Intro/>
}

const VizOne_ = {
    path: '/project/VizOne',
    sideBarText: 'Impact Network Map',
    sideBarIcon: <MapIcon/>,
    mainView: <VizOne/>
}

const VizTwo_ = {
    path: '/project/VizTwo',
    sideBarText: 'Ripple Plot',
    sideBarIcon: <MapIcon/>,
    mainView: <VizTwo/>
}

const Video_ = {
    path:'/project/Video',
    sideBarText: 'Video',
    sideBarIcon: <OndemandVideoIcon/>,
    mainView: <Video/>
}

const About_ = {
    path:'/project/About',
    sideBarText: 'About',
    sideBarIcon: <InfoIcon/>,
    mainView: <About/>
}

const Blog_ = {
    path:'/project/Blog',
    sideBarText: 'Blog Post',
    sideBarIcon: <BookIcon/>,
    mainView: <Blog/>
}

const FoodWeb_ = {
    path:'/project/FoodWeb',
    sideBarText: 'Food Web',
    sideBarIcon: <BlurOnIcon/>,
    mainView: <GitHub/>
}

const GitHub_ = {
    path:'/project/GitHub',
    sideBarText: 'Github',
    sideBarIcon: <GitHubIcon/>,
    mainView: <GitHub/>,
}

const Routes = [
    Home_,
    About_,
    VizTwo_,
    VizOne_,
    Blog_,
    Video_,
    GitHub_
]

export default Routes
