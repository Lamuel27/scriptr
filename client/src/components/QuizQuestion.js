import React from "react";

function QuizQuestion(props) {
    const style = {
        buttonStyle: {
            "display": "block"
        },
        questionStyle: {
            "fontSize":"24px"
        },
        body: {
            "overflow":"scroll"
        }
    }

    function evaluate() {
        // Put logic here for evaluating answer
    }

    return (
        <div className="ui form">
            <div className="question" style={style.questionStyle}>
                <label>{props.question}</label>
                <button className="ui button" style={style.buttonStyle}>
                    {props.a}
                </button>
                <br></br>
                <button className="ui button" style={style.buttonStyle}>
                    {props.b}
                </button>
                <br></br>
                <button className="ui button" style={style.buttonStyle}>
                    {props.c}
                </button>
                <br></br>
                <button className="ui button" style={style.buttonStyle}>
                    {props.d}
                </button>
            </div>
            <br></br>
            <br></br>
        </div>

    )
}

export default QuizQuestion;