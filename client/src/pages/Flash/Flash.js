import React, { Component } from 'react';
import './Flash.css';
import Flashcard from '../../components/Flashcard';
import API from '../../utils/API';
import Activities from '../../components/Activity';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Flash extends Component {

  state = {
    questions: []
  };

  getData(type) {
    console.log("boosh")
    API.getTypeQuestions(type)
      .then(data => {
        console.log("Questions:");
        console.log(data);
        var questions = [];

        for (var i = 0; i < 8; i++) {
          var randomInt = Math.floor(Math.random() * (data.data.length))
          var randomQ = {};
          console.log(randomInt)
          randomQ = data.data[randomInt];
          console.log(randomQ)
          questions.push(randomQ);
          data.data.splice(randomInt, 1);
        }
        this.setState({ questions: questions })
      })
      .catch(err => console.log(err));
  }
  componentDidMount() {
  };

  render() {
    return (
      <div>
        <h1 style={{ "textAlign": "center", "color": "white" }}>Study with Flash cards</h1>
        <TransitionGroup>
          <CSSTransition
            key={0}
            timeout={500}
            className="fade"
          >
            <Activities>

              <Link to={"/flash/HTML"} onClick={this.getData.bind(this, "HTML")}>
                <img className="zoom" style={{ "width": "17%" }} src="http://www.stickpng.com/assets/images/5847f5bdcef1014c0b5e489c.png" alt=""></img>
              </Link>
              <Link to={"/flash/CSS"} onClick={this.getData.bind(this, "CSS")}>
                <img className="zoom" style={{ "width": "17%" }} src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png" alt=""></img>
              </Link>
              <Link to={"/flash/JS"} onClick={this.getData.bind(this, "JS")}>
                <img className="zoom" style={{ "width": "20%" }} src="https://fuzati.com/wp-content/uploads/2016/12/JS-Logo.png" alt=""></img>
              </Link>
              <Link to={"/flash/SQL"} onClick={this.getData.bind(this, "SQL")}>
                <img className="zoom" style={{ "width": "20%" }} src="https://clipart.info/images/ccovers/1499794875MySQL-logo-png-transparent.png" alt=""></img>
              </Link>
              <Link to={"/flash/MONGO"} onClick={this.getData.bind(this, "MONGO")}>
                <img className="zoom" style={{ "width": "24%" }} src="http://pluspng.com/img-png/logo-mongodb-png-file-mongodb-logo-svg-1280.png" alt=""></img>
              </Link>
            </Activities>
          </CSSTransition>
        </TransitionGroup>
        <div style={{ "display": "inlineBlock" }} className="grid-container">
          {this.state.questions.map(item => (
            <Flashcard
              key={item._id}
              front={item.question}
              back={item.answers[item.correctIndex]}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Flash;