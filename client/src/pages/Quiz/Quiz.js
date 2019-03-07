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
        API.getTypeQuestions("HTML")
            .then(data => {
                console.log("Questions:");
                console.log(data.data);
                this.setState({ questions: data.data })
            })
            .catch(err => console.log(err));
    };

    answered() {
        this.state.instance.next();
    }

    render() {
        return (
            <div className="carousel carousel-slider center">
                <div className="carousel-fixed-item center">
                    <a className="btn waves-effect white grey-text darken-text-2" href="" onClick={() => this.answered}></a>
                </div>
                {this.state.questions.map(item => (
                    <a className="carousel-item" href="#one!" key={item._id} style={this.style.linkStyle}>
                        <QuizQuestion
                            question={item.question}
                            a={item.answers[0]}
                            b={item.answers[1]}
                            c={item.answers[2]}
                            d={item.answers[3]}
                        />
                    </a>
                ))}
            </div>
        )
    }
}

export default Quiz;
