import React, { Component } from "react";

class ProfileCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <a className="ui card" href="/profile">
                <div className="image">
                    <img src="https://semantic-ui.com/images/avatar2/large/kristy.png"></img>
                </div>
                <a className="content">
                    <a className="header" href="/profile"><h3 style={{ "color": "white" }}>Helen</h3></a>
                    <div className="meta">
                        <span style={{ "color": "white" }}>Super-Coder (Level 43)</span>
                    </div>
                </a>
            </a>
        )
    }
}

export default ProfileCard;