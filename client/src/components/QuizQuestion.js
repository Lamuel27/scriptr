import React from "react";

function QuizQuestion(props) {
    return (
        <div class="ui form">
            <div class="inline fields">
                <label>{props.question}</label>
                <div class="field">
                    <div class="ui radio checkbox">
                        <input type="radio"></input>
                        <label>{props.a}</label>
                    </div>
                </div>
                <div class="field">
                    <div class="ui radio checkbox">
                        <input type="radio"></input>
                        <label>{props.b}</label>
                    </div>
                </div>
                <div class="field">
                    <div class="ui radio checkbox">
                        <input type="radio"></input>
                        <label>{props.c}</label>
                    </div>
                </div>
                <div class="field">
                    <div class="ui radio checkbox">
                        <input type="radio"></input>
                        <label>{props.d}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizQuestion;