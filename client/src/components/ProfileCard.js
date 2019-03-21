import React, { Component } from "react";
import '../Auth/Auth';
import { Link } from 'react-router-dom';



class ProfileCard extends Component {

    style = {
        cardBackground: {
            "backgroundColor": "rgb(255,195,99)",
            "width": "100px",
            "position": "fixed",
            "top": "25px",
            "right": "25px",
            "zIndex": "10",
            "boxShadow": "0px 5px 20px rgba(0,0,0,.5)",
            "textAlign": "center",
            "borderRadius": "5px"
        },
        cardImage: {
            "width": "100%",
            "padding": "10px"
        },
        cardTitle: {
            "fontWeight": "semibold",
            "color":"black"
        },
        cardSubtitle: {
            "fontSize": "small",
            "fontWeight":"lighter",
            "color":"black"
        },
        cardLink: {
            "fontWeight": "bold",
            "color":"black"
        },
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
            <div class="card" style={this.style.cardBackground}>
                <Link to='/profile' class="header" href="/profile"><div className="card-image">
                    <img style={this.style.cardImage} src={profile.picture} alt="Profile Pic"></img>
                    <span className="card-title" style={this.style.cardTitle}>{profile.nickname}</span>
                </div>
                <div class="card-content">
                    <p style={this.style.cardSubtitle}>Super-Coder (Level 43)</p>
                </div></Link>
                <div class="card-action">
                    <Link to='/profile' class="header" style={this.style.cardLink} href="/profile">Profile</Link>
                </div>
            </div>
        )
    }
}

export default ProfileCard;