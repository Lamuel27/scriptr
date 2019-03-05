import React, { Component } from "react";

class Jumbotron extends Component {
    constructor(props) {
        super(props)
    }

    style = {
        jumboText: {
            "fontFamily": "Amatic SC, cursive",
            "textAlign":"center"
        },
        jumboSubtext: {
            "fontFamily":"Montserrat, sans-serif"
        }
    }

    render() {
        return (
            <div className="container" style={this.style.jumboText}>
                <div className="jumbotron" style={{ "backgroundColor": "transparent", "color": "white" }}>
                    <h1 className="display-4" style={this.style.jumboText}>scriptr</h1>
                    <p className="lead" style={this.style.jumboSubtext}>Quizzes. Flashcards. Interactive Problems.</p>
                    <hr className="my-4"></hr>
                    <p style={this.style.jumboSubtext}>Stay on top of your coding skills.</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </div>
            </div>
        )
    }
}

export default Jumbotron;