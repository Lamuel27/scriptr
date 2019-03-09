import React, { Component } from 'react';
import './Flash.css';
import Flashcard from '../../components/Flashcard';
import API from '../../utils/API';
import ActivityCard from '../../components/ActivityCard';
import Activities from '../../components/Activity';
import { get } from 'https';
import { Link } from 'react-router-dom';

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
        this.setState({ questions: data.data })
      })
      .catch(err => console.log(err));
  }
  componentDidMount() {
  };

  render() {
    return (
      <div>
        <h1 style={{ "textAlign": "center", "color": "white" }}>Study with Flash cards</h1>
        <Activities>

          <Link to={"/flash/HTML"} onClick={this.getData.bind(this, "HTML")}>
            <img className="zoom" src="http://www.stickpng.com/assets/images/5847f5bdcef1014c0b5e489c.png" alt=""></img>
          </Link>
          <Link to={"/flash/CSS"} onClick={this.getData.bind(this, "CSS")}>
            <img className="zoom" src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png" alt=""></img>
          </Link>
          <Link to={"/flash/JS"} onClick={this.getData.bind(this, "JS")}>
            <img className="zoom" src="https://fuzati.com/wp-content/uploads/2016/12/JS-Logo.png" alt=""></img>
          </Link>
          <Link to={"/flash/SQL"} onClick={this.getData.bind(this, "SQL")}>
            <img className="zoom" src="https://clipart.info/images/ccovers/1499794875MySQL-logo-png-transparent.png" alt=""></img>
          </Link>
          <Link to={"/flash/MONGO"} onClick={this.getData.bind(this, "MONGO")}>
            <img className="zoom" src="http://pluspng.com/img-png/logo-mongodb-png-file-mongodb-logo-svg-1280.png" alt=""></img>
          </Link>


          {/* <Link id = "css" parameter="CSS" src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png" onClick={this.getData.bind(this, "CSS")} />
          <Link id = "js" parameter="JS" src="https://fuzati.com/wp-content/uploads/2016/12/JS-Logo.png" onClick={this.getData.bind(this, "JS")} />
          <Link id = "sql" parameter="SQL" src="https://clipart.info/images/ccovers/1499794875MySQL-logo-png-transparent.png" onClick={this.getData.bind(this, "SQL")} />
          <Link id = "mongo" parameter="MONGO" src="http://pluspng.com/img-png/logo-mongodb-png-file-mongodb-logo-svg-1280.png" onClick={this.getData.bind(this, "MONGO")} /> */}



        </Activities>
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