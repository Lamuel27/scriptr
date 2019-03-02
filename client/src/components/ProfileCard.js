import React, { Component } from "react";
import '../Auth/Auth';
import {Router, Route, Link, RouteHandler} from 'react-router-dom';



class ProfileCard extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.setState({ profile: {} });
        const { userProfile, getProfile } = this.props.name.auth;
        if (!userProfile) {
            getProfile((err, profile) => {
                this.setState({ profile });
            });
        } else {
            this.setState({ profile: userProfile });
        }
    }
    goTo(route) {
        this.props.history.replace(`/${route}`);
    }
    render() {
        console.log(this.props)
        const { profile } = this.state;

        return (
            <div
                className="ui card"
                href="/profile"
                style={{
                    "position": "fixed",
                    "right": "50px",
                    "top": "50px",
                    "width": "150px",
                    "zIndex": "10",
                    "boxShadow": "0px 5px 20px rgba(0,0,0,.5)",
                    "textAlign": "center"
                }}>
                <div className="image">
                    <img src={profile.picture}></img>
                </div>
                <div className="content">
                    <Link to = '/profile' className="header" href="/profile"><h4 style={{ "color": "black" }}>{profile.nickname}</h4></Link>
                    <div className="meta">
                        <span style={{ "color": "black" }}>Super-Coder (Level 43)</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileCard;