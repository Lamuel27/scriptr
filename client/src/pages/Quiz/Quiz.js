import React, { Component } from "react";
import QuizQuestion from '../../components/QuizQuestion';
import "./Quiz.css";
import M from "materialize-css";
import API from "../../utils/API";

class Quiz extends Component {

    style = {
        linkStyle: {
            "textDecoration": "none"
        }
    }

    state = {
        questions: []
    }

    componentDidMount() {
        API.getTypeQuestions("JS")
            .then(data => {
                console.log("Questions:");
                console.log(data.data);
                this.setState({ questions: data.data })
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                {this.state.questions.map(item => (
                    <QuizQuestion
                        question={item.question}
                        a={item.answers[0]}
                        b={item.answers[1]}
                        c={item.answers[2]}
                        d={item.answers[3]}
                    />
                ))}
            </div>
        )
    }
}

export default Quiz;
