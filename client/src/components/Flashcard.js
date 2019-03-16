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
        },
        textStyle: {
            "fontWeight": "bold"
        }
    }

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front" style={style.frontStyle}>
                    <h3>{props.front}</h3>
                </div>
                <div className="flip-card-back" style={style.backStyle}>
                    <h3 style={style.textStyle}>{props.back}</h3>
                </div>
            </div>
        </div>
    )
}

export default Flashcard;