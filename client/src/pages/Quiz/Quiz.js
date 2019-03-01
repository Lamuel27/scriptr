import React, { Component } from "react";
import QuizQuestion from '../../components/QuizQuestion';

class Quiz extends Component {
    render() {
        return (
            <div>
                <QuizQuestion
                    question="filler language filler language"
                    a="sadfasdfasdf"
                    b="asdfasdf"
                    c="asdfasdf"
                    d="asdfasdf"
                />
            </div>
        )

    }
}

export default Quiz;
