import React, { Component } from "react";
import QuizQuestion from '../../components/QuizQuestion';
import "./Quiz.css";
import API from "../../utils/API";
import { Link } from 'react-router-dom';
import Activities from '../../components/Activity';
import QuizAnswer from '../../components/QuizAnswer';

class Quiz extends Component {

  style = {
    linkStyle: {
      "textDecoration": "none"
    }
  }

  state = {
    questions: [],
    answers: []
  }

  getData = type => {
    console.log("boosh")
    this.setState({ answers: [] })
    API.getTypeQuestions(type)
      .then(data => {
        var questions = [];
        console.log("Questions:");
        console.log(data);
        for (var i = 0; i < 10; i++) {
          var randomInt = Math.floor(Math.random() * (data.data.length))
          var randomQ = {};
          console.log(randomInt)
          randomQ = data.data[randomInt];
          console.log(randomQ)
          questions.push(randomQ);
          data.data.splice(randomInt, 1);
        }
        console.log(questions);
        this.setState({ questions: questions })
      })
      .catch(err => console.log(err));
  }

  answerHandler = (id, index) => {
    console.log("boosh")
    var answers = (this.state.answers)
    var answer = {
      answerId: id,
      answerIndex: index
    }
    answers.push(answer);
    this.setState({ answers: answers })
    console.log("Answers: ");
    console.log(this.state.answers);
  }

  evaulate = event => {
    event.preventDefault();
    var correct = 0;
    var total = 0;
    for (var i = 0; i < this.state.questions.length; i++) {
      var question = this.state.questions[i];
      var answer = this.state.answers.filter(item => item.answerId === question._id);
      if (question.correctIndex === answer.answerIndex) {
        correct++;
      }
      total++;
    }
    var score = correct / total;
    console.log("The user's score is " + score * 10 + "%")

    // Make an API call to the model containing the user's info, and fetch the user
    // Create a "correctAllTime" variable, set it to the user's current "correct" value from the DB
    // Create a "totalAllTime" variable, set it to the user's current "total" value from the DB
    // var newCorrectAllTime = correctAllTime + correct
    // var newTotalAllTime = totalAllTime + total
    // Replace those values in the DB

    // Take the user to a result page for this quiz
  }

  render() {
    return (
      <div>
        <h1 style={{ "textAlign": "center", "color": "white" }}>Take a Quiz</h1>
        <Activities>
          <Link to={"/quiz/HTML"} onClick={this.getData.bind(this, "HTML")}>
            <img className="zoom" style={{ "width": "17%" }} src="http://www.stickpng.com/assets/images/5847f5bdcef1014c0b5e489c.png" alt=""></img>
          </Link>
          <Link to={"/quiz/CSS"} onClick={this.getData.bind(this, "CSS")}>
            <img className="zoom" style={{ "width": "17%" }} src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png" alt=""></img>
          </Link>
          <Link to={"/quiz/JS"} onClick={this.getData.bind(this, "JS")}>
            <img className="zoom" style={{ "width": "20%" }} src="https://fuzati.com/wp-content/uploads/2016/12/JS-Logo.png" alt=""></img>
          </Link>
          <Link to={"/quiz/SQL"} onClick={this.getData.bind(this, "SQL")}>
            <img className="zoom" style={{ "width": "20%" }} src="https://clipart.info/images/ccovers/1499794875MySQL-logo-png-transparent.png" alt=""></img>
          </Link>
          <Link to={"/quiz/MONGO"} onClick={this.getData.bind(this, "MONGO")}>
            <img className="zoom" style={{ "width": "24%" }} src="http://pluspng.com/img-png/logo-mongodb-png-file-mongodb-logo-svg-1280.png" alt=""></img>
          </Link>
        </Activities>
        {this.state.questions.map((item, index) => (
          <QuizQuestion
            key={item._id}
            question={item.question}>
            <QuizAnswer
              id={item._id}
              index={index}
              answerHandler={this.answerHandler}
            >
              {item.answers[0]}
            </QuizAnswer>
            <QuizAnswer
              id={item._id}
              index={index}
              answerHandler={this.answerHandler}
            >
              {item.answers[1]}
            </QuizAnswer>
            <QuizAnswer
              id={item._id}
              index={index}
              answerHandler={this.answerHandler}
            >
              {item.answers[2]}
            </QuizAnswer>
            <QuizAnswer
              id={item._id}
              index={index}
              answerHandler={this.answerHandler}
            >
              {item.answers[3]}
            </QuizAnswer>
          </QuizQuestion>
        ))}
        <button id="submitButton" className="waves-effect waves-light btn" onClick={() => this.evaluate}>Submit</button>
      </div>
    )
  }
}

export default Quiz;
