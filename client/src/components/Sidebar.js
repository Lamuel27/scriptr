import React, { Component } from "react";
import ProfileCard from "./ProfileCard";

class Sidebar extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div>
                <div id="large-sidebar" className="ui left vertical inverted sidebar menu computer lrg screen widescreen only" style={{"backgroundColor": "rgba(255,93,72,.75)"}}>
                    <ProfileCard />
                    <br />
                    <a className="item" href="/">
                        <i className="home icon"></i>
                        Home
                    </a>
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
                </div>

                <div id="mobile-sidebar" className="ui left vertical inverted sidebar labeled icon menu mobile only">
                    <a className="item" href="/">
                        <i className="home icon"></i>
                        Home
                    </a>
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