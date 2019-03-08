import React, { Component } from "react";
import { Link } from 'react-router-dom';


class Activities extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style = {{ "backgroundColor":"RGBA(255,255,255,.5"}}>
            <Link to="/flash/HTML">
            <img style = {{ "width":"17%" }} src = "http://www.stickpng.com/assets/images/5847f5bdcef1014c0b5e489c.png"></img>
            </Link>
            <Link to="/flash/CSS">
            <img style = {{ "width":"17%" }} src = "https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png"></img>
            </Link>
            <Link to="/flash/JS">
            <img style = {{ "width":"20%" }} src = "https://fuzati.com/wp-content/uploads/2016/12/JS-Logo.png"></img>
            </Link>
            <Link to="/flash/SQL">
            <img style = {{ "width":"20%" }} src = "https://clipart.info/images/ccovers/1499794875MySQL-logo-png-transparent.png"></img>
            </Link>
            <Link to="/flash/MONGO">
            <img style = {{ "width":"24%" }} src = "http://pluspng.com/img-png/logo-mongodb-png-file-mongodb-logo-svg-1280.png"></img>
            </Link>
            </div>
          );
        }
    }

export default Activities;