import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Navbar extends Component {

    style = {
        navBar: {
            "backgroundColor": "rgba(0,0,0,0)",
            "boxShadow": "none",
            "position": "fixed",
            "width": "100%"
        },
        navFont: {
            "fontFamily": "'Montserrat', sans-serif",
            "fontSize": "x-large",
            "textShadow": "0px 0px 5px rgba(0,0,0,1)",
            "textDecoration": "none",
            "width": "64px",
            "borderRadius": "0px",
            "boxShadow": "none",
            "backgroundColor": "rgba(0,0,0,0)",
            "height": "64px",
            "color": "white"
        },
        floatNav: {
            "left": "25px",
            "top": "10px",
            "paddingTop": "7.5px",
            "width": "64px",
            "height": "64px"
        },
        navButton: {
            "width": "125px",
            "paddingTop": "10px",
            "textAlign": "center"
        }
    }

    render() {
        const { isAuthenticated, logout, login } = this.props.name.auth;

        return (
            <div className="fixed-action-btn direction-right" style={this.style.floatNav}>
                <img src="./images/scriptrlogo.png" className="btn-floating" style={this.style.navFont} alt="logo"></img>

                {!isAuthenticated() &&
                    <ul>
                        <li style={this.style.navButton}><Link onClick={login.bind(this)} to="/home" className="btn-floating" style={this.style.navFont}>Login</Link></li>
                    </ul>}

                {isAuthenticated() &&
                    <ul>
                        <li style={this.style.navButton}><Link to="/home" className="btn-floating" style={this.style.navFont}>Home</Link></li>
                        <li style={this.style.navButton}><Link to="/profile" className="btn-floating" style={this.style.navFont}>Profile</Link></li>
                        <li style={this.style.navButton}><Link to="/quiz" className="btn-floating" style={this.style.navFont}>Quiz</Link></li>
                        <li style={this.style.navButton}><Link to="/fiddle" className="btn-floating" style={this.style.navFont}>Fiddle</Link></li>
                        <li style={this.style.navButton}><Link onClick={logout.bind(this)} to="/" className="btn-floating" style={this.style.navFont}>Logout</Link></li>
                    </ul>}

            </div>
        )
    }
}

export default Navbar;