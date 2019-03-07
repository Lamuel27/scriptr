import React, { Component } from "react";
import QuizQuestion from '../../components/QuizQuestion';
import "./Quiz.css";
import M from "materialize-css";
import API from "../../utils/API";

class Quiz extends Component {

    style = {
        linkStyle:{
            "textDecoration":"none"
        }
    }

    state = {
        instance: {}
    }

    componentDidMount() {
        var elems = document.querySelectorAll('.carousel');
        var inst = M.Carousel.init(elems, {
            duration: 10,
        });
        this.setState({ instance: inst });
        API.getTypeQuestions("HTML")
        .then(data => {
            console.log(data)
        })
    };

    answered() {
        this.state.instance.next();
    }

    render() {
        return (
            <div className="carousel carousel-slider center">
                <div class="carousel-fixed-item center">
                    <a class="btn waves-effect white grey-text darken-text-2" onClick={() => this.answered}></a>
                </div>

                <a className="carousel-item" href="#one!" style={this.style.linkStyle}><QuizQuestion
                    question="What does HTML stand for?"
                    a="How The Man Landed"
                    b="Hyper Text Markup Language"
                    c="Hyper Text Meaningful Language"
                    d="Hyper Text Markup Logic"
                /></a>

                <a className="carousel-item" href="#two!" style={this.style.linkStyle}><QuizQuestion
                    question="What is an individual block of HTML called?"
                    a="Div"
                    b="Tag"
                    c="Element"
                    d="Block"
                /></a>

                <a className="carousel-item" href="#three!" style={this.style.linkStyle}><QuizQuestion
                    question="What does the tag '<p>' do?"
                    a="Creates a paragraph of text"
                    b="Creates padding around a block"
                    c="Indents a block of text"
                    d="Makes a period at the end of a sentence"
                /></a>

                <a className="carousel-item" href="#four!" style={this.style.linkStyle}><QuizQuestion
                    question="What is a '<div>'?"
                    a="A way to divide one number with another number"
                    b="A block of text"
                    c="A shape"
                    d="A block of HTML that acts as a simple container"
                /></a>
                
            </div>
        )
    }
}

export default Quiz;
