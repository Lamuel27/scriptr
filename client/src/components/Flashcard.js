import React from "react";

function Flashcard(props) {
    const style = {
        frontStyle: {
            "backgroundColor":"rgba(255,248,237)",
            "textAlign": "center",
            "fontWeight": "lighter",
            "marginRight": "auto",
            "textDecoration": "none"
        },
        backStyle: {
            "backgroundColor":"rgba(255,238,211)",
            "fontSize": "large",
            "textAlign": "center"
        }
    }

    function evaluate() {
        // Put logic here for evaluating answer
    }

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front" style={style.frontStyle}>
                    <h1>{props.front}</h1>
                </div>
                <div className="flip-card-back" style={style.backStyle}>
                    <h1>{props.back}</h1>
                </div>
            </div>
        </div>
    )
}

export default Flashcard;