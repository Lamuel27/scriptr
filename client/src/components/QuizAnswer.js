import React from "react";

function QuizAnswer(props) {

    const style = {
        buttonStyle: {
            "display": "block",
            "textAlign": "center",
            "marginLeft": "auto",
            "marginRight": "auto",
            "textDecoration": "none",
            "width": "20%"
        }
    }
    return (
        <button id={props.id} className="waves-effect waves-light btn" style={style.buttonStyle} onClick={(e) => props.answerHandler(props.id, props.index)}>
            {props.children}
        </button>
    )
}

export default QuizAnswer;