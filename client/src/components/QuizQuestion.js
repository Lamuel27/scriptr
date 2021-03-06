import React from "react";

function QuizQuestion(props) {
    const style = {
        questionStyle: {
            "fontSize":"large",
            "textAlign":"center",
            "color":"black"
        }
    }

    return (
        <div className="ui form">
            <div className="question" style={style.questionStyle}>
                <label style={style.questionStyle}>{props.question}</label>
                {props.children}
            </div>
            <br></br>
            <br></br>
        </div>

    )
}

export default QuizQuestion;