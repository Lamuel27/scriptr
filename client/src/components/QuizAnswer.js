import React from "react";
import $ from "jquery";

function QuizAnswer(props) {

    const style = {
        buttonStyle: {
            "display": "block",
            "textAlign": "center",
            "marginLeft": "auto",
            "marginRight": "auto",
            "textDecoration": "none",
            "width": "50%",
            "margin-top": "10px"
        }
    }
    return (
        <button id={props.id} className={"btn " + props.id + " " + props.id + props.index} style={style.buttonStyle}
        onClick={(e) => {
            props.answerHandler(props.id, props.index);
            console.log("Changing class of button " + props.id)
            $("." + props.id).attr("style", "display:block; text-align: center; margin-left: auto; margin-right: auto; text-decoration: none; width: 50%; background-color: rgba(116,116,116,.5)");
            $("." + props.id + props.index).attr("style", "display:block; text-align: center; margin-left: auto; margin-right: auto; text-decoration: none; width: 50%; background-color: rgba(255,255,255,1)");
        }}>
            {props.children}
        </button>
    )
}

export default QuizAnswer;