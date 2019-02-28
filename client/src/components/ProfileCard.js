import React, { Component } from "react";

class ProfileCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div
                className="ui card"
                href="/profile"
                style={{
                    "position": "fixed",
                    "right": "50px",
                    "top": "50px",
                    "width": "150px",
                    "zIndex":"10",
                    "boxShadow": "0px 5px 20px rgba(0,0,0,.5)",
                    "textAlign":"center"
                }}>
                <div className="image">
                    <img src="https://semantic-ui.com/images/avatar2/large/kristy.png"></img>
                </div>
                <div className="content">
                    <a className="header" href="/profile"><h4 style={{ "color": "black" }}>Helen</h4></a>
                    <div className="meta">
                        <span style={{ "color": "black" }}>Super-Coder (Level 43)</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileCard;