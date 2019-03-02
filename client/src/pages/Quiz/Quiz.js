import React, { Component } from "react";
import QuizQuestion from '../../components/QuizQuestion';
import "./Quiz.css";

class Quiz extends Component {
    render() {
        return (
            <div>
                <QuizQuestion
                    question="What does HTML stand for?"
                    a="How The Man Landed"
                    b="Hyper Text Markup Language"
                    c="Hyper Text Meaningful Language"
                    d="Hyper Text Markup Logic"
                />
                <QuizQuestion
                    question="What is an individual block of HTML called?"
                    a="Div"
                    b="Tag"
                    c="Element"
                    d="Block"
                />
                <QuizQuestion
                    question="What does the tag '<p>' do?"
                    a="Creates a paragraph of text"
                    b="Creates padding around a block"
                    c="Indents a block of text"
                    d="Makes a period at the end of a sentence"
                />
                <QuizQuestion
                    question="What is a '<div>'?"
                    a="A way to divide one number with another number"
                    b="A block of text"
                    c="A shape"
                    d="A block of HTML that acts as a simple container"
                />
                <QuizQuestion
                    question="Select the correct closing tag for <span>"
                    a="/<span>"
                    b="</span>"
                    c="<span/>"
                    d="<span>/"
                />
            </div>
        )

    }
}

export default Quiz;
