import React from "react";

function QuizQuestion(props) {
    const style = {
        buttonStyle: {
            "display": "block"
        },
        questionStyle: {
            "fontSize":"large"
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
            <div className="question">
                <label style={style.questionStyle}>{props.question}</label>
                <button className="waves-effect waves-light btn" style={style.buttonStyle}>
                    {props.a}
                </button>
                
                <button className="waves-effect waves-light btn" style={style.buttonStyle}>
                    {props.b}
                </button>
                
                <button className="waves-effect waves-light btn" style={style.buttonStyle}>
                    {props.c}
                </button>
                
                <button className="waves-effect waves-light btn" style={style.buttonStyle}>
                    {props.d}
                </button>
            </div>
            <br></br>
            <br></br>
        </div>

    )
}

export default QuizQuestion;