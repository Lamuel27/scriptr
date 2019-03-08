import React, { Component } from "react";
import Activities from '../../components/Activity';
// import "./ActivitySelect.css"

class ActivitySelect extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style = {{ "padding" : "35px" }}>
                <Activities />
            </div>
        )
    }
}

export default ActivitySelect;
