import React, { Component } from "react";
import {Router, Route, Link, RouteHandler} from 'react-router-dom';

class Sidebar extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        const { isAuthenticated, logout, login } = this.props.name.auth;

        return (
            <div>
                <div id="large-sidebar" className="ui left vertical inverted sidebar menu computer lrg screen widescreen only" style={{"backgroundColor": "rgba(255,93,72,.75)"}}>
                    <br />
                    {!isAuthenticated() && 
                    <Link onClick={login.bind(this)}
                    to="/home" className="item">
                        <i className="user circle icon"></i>
                        Login
                    </Link>}
                    <Link to="/home" className="item">
                        <i className="home icon"></i>
                        Home
                    </Link>
                    {isAuthenticated() &&
                    <Link to="/profile" className="item">
                        <i className="user circle icon"></i>
                        Profile
                    </Link>}
                    {isAuthenticated() &&
                    <Link to="/activities" className="item">
                        <i className="table tennis circle icon"></i>
                        Activities
                    </Link>}
                    {isAuthenticated() &&
                    <Link to="/quiz" className="item">
                        <i className="pencil alternate icon"></i>
                        Quiz
                    </Link>}
                    {isAuthenticated() &&
                    <Link to="/fiddle" className="item">
                        <i className="keyboard icon"></i>
                        Fiddle
                    </Link>}
                    <a className="item" href="/activityselect/html">
                        <i className="html5 icon"></i>
                        HTML
                    </a>
                    <a className="item" href="/activityselect/css">
                        <i className="css3 icon"></i>
                        CSS
                    </a>
                    <a className="item" href="/activityselect/js">
                        <i className="js square icon"></i>
                        JS
                    </a>
                    <a className="item" href="/activityselect/mysql">
                        <i className="database icon"></i>
                        MySQL
                    </a>
                    <a className="item" href="/activityselect/python">
                        <i className="python icon bottom"></i>
                        Python
                    </a>
                    {isAuthenticated() &&
                    <Link onClick={logout.bind(this)}to="/" className="item">
                        <i className="keyboard icon"></i>
                        Logout
                    </Link>}
                </div>

                <div id="mobile-sidebar" className="ui left vertical inverted sidebar labeled icon menu mobile only">
                    <a className="item" href="/">
                        <i className="home icon"></i>
                        Home
                    </a>
                    {!isAuthenticated() &&
                    <Link to="/profile" className="item">
                        <i className="profile icon"></i>
                        Profile
                    </Link>}
                    <a className="item" href="/activityselect/html">
                        <i className="html5 icon"></i>
                        HTML
                    </a>
                    <a className="item" href="/activityselect/css">
                        <i className="css3 icon"></i>
                        CSS
                    </a>
                    <a className="item" href="/activityselect/js">
                        <i className="js square icon"></i>
                        JS
                    </a>
                    <a className="item" href="/activityselect/mysql">
                        <i className="database icon"></i>
                        MySQL
                    </a>
                    <a className="item" href="/activityselect/python">
                        <i className="python icon"></i>
                        Python
                    </a>
                </div>
            </div>
        )
    }
}

export default Sidebar;