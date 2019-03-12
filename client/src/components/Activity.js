import React, { Component } from "react";
import '../pages/ActivitySelect/ActivitySelect.css'


class Activities extends Component {
   
    render() {
        return (
            <div style = {{ "backgroundColor":"RGBA(255,255,255,.5"}}>
            {this.props.children}
            </div>
          );
        }
    }

export default Activities;