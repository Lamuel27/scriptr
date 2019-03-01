import React, { Component } from "react";
import ActivityCard from '../../components/ActivityCard';

class ActivitySelect extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <ActivityCard icon="clone outline icon">Flash Cards</ActivityCard>
                <ActivityCard icon="edit outline icon">Quiz</ActivityCard>
                <ActivityCard icon="code icon">Code Fix</ActivityCard>
            </div>
        )
    }
}