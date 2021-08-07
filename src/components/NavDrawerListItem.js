import React, {Component} from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import {ListItemIcon} from "@material-ui/core";
import MapIcon from "@material-ui/icons/Map";
import {Link as RouterLink} from "react-router-dom";
import PropTypes from "prop-types";
// import {RouteDef} from "../routes/Routes"

function ListItemRoute(props){
    const { icon, primary, to } = props;

    const renderLink = React.useMemo(
        () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
        [to],
    );

    return (
        <ListItem button component={renderLink} key={primary}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={primary}/>
        </ListItem>
    );
}
ListItemRoute.propTypes = {
    icon: PropTypes.element,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

class NavDrawerListItem extends Component{
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
        }
    }

    render() {
        return (
            <ListItemRoute to={this.props.path} primary={this.props.sideBarText} icon={this.props.sideBarIcon} key={this.props.sideBarText}/>
        );
    }
}

export default NavDrawerListItem
