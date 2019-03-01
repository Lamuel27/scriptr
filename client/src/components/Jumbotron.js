import React, { Component } from "react";

class Jumbotron extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="container" style={{"textAlign":"center"}}>
            <div className="jumbotron">
                <h1 className="display-4">scriptr</h1>
                <p className="lead">Quizzes. Flashcards. Interactive Problems.</p>
                <hr className="my-4"></hr>
                <p>Stay on top of your coding skills.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
            </div>
        )
    }
}

export default Jumbotron;