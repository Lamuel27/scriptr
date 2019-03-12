import React, { Component } from "react";
import Activities from '../../components/Activity';

class ActivitySelect extends Component {

    render() {
        return (
            <div style = {{ "padding" : "35px" }}>
                <Activities />
            </div>
        )
    }
}

export default ActivitySelect;
