import React from "react";

function QuizQuestion(props) {
    const style = {
        buttonStyle: {
            "display": "block",
            "textAlign":"center",
            "marginLeft":"auto",
            "marginRight":"auto",
            "textDecoration":"none",
            "width":"20%"
        },
        questionStyle: {
            "fontSize":"large",
            "textAlign":"center"
        }
    }

    function evaluate() {
        // Put logic here for evaluating answer
    }

    return (
        <div className="ui form">
            <div className="question" style={style.questionStyle}>
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