import React from "react";

function QuizQuestion(props) {
    return (
        <div className="ui form">
            <div className="inline fields">
                <label>{props.question}</label>
                <div className="field">
                    <div className="ui radio checkbox">
                        <input type="radio"></input>
                        <label>{props.a}</label>
                    </div>
                </div>
                <div className="field">
                    <div className="ui radio checkbox">
                        <input type="radio"></input>
                        <label>{props.b}</label>
                    </div>
                </div>
                <div className="field">
                    <div className="ui radio checkbox">
                        <input type="radio"></input>
                        <label>{props.c}</label>
                    </div>
                </div>
                <div className="field">
                    <div className="ui radio checkbox">
                        <input type="radio"></input>
                        <label>{props.d}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizQuestion;