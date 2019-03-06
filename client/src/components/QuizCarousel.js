import React from "react";
import QuizQuestion from "./QuizQuestion";

function QuizCarousel(props) {

    function evaluate() {
        // Put logic here for evaluating answer
    }

    return (
        <div className="carousel carousel-slider">
            <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/800/400/food/1" alt="question"></img></a>
            <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/800/400/food/2" alt="question"></img></a>
            <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/800/400/food/3" alt="question"></img></a>
            <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/800/400/food/4" alt="question"></img></a>
        </div>
    )
}

export default QuizCarousel;