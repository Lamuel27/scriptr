import React, { Component } from "react";

function ActivityCard(props) {
    return (
        <div
            className="ui card">
            <div className="image">
            <i className={props.icon} style={{"width":"100%","height":"150px","fontSize":"100px"}}></i>
            </div>
            <div className="content">
                <a className="header" href="/profile"><h4 style={{ "color": "black", "textAlign":"center" }}>{props.children}</h4></a>
            </div>
        </div>
    )
}

export default ActivityCard;