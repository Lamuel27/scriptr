import React, { Component } from "react";
import ActivityCard from '../../components/ActivityCard';
// import "./ActivitySelect.css"

class ActivitySelect extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style = {{ "padding" : "35px" }}>
                <ActivityCard href="/profile" icon="clone outline icon">Flash Cards</ActivityCard>
                <ActivityCard href="/quiz" icon="edit outline icon">Quiz</ActivityCard>
                <ActivityCard href="/fiddle" icon="code icon">Code Fix</ActivityCard>
            </div>
        )
    }
}

export default ActivitySelect;
