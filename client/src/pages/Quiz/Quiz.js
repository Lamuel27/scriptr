import React, { Component } from "react";
import QuizQuestion from '../../components/QuizQuestion';
import "./Quiz.css";
import M from "materialize-css";
import API from "../../utils/API";
import { Link } from 'react-router-dom';
import Activities from '../../components/Activity';


class Quiz extends Component {

    style = {
        linkStyle: {
            "textDecoration": "none"
        }
    }

    state = {
        questions: []
    }

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
                <h1 style={{ "textAlign": "center", "color": "white" }}>Take a Quiz</h1>
        <Activities>

          <Link to={"/quiz/HTML"} onClick={this.getData.bind(this, "HTML")}>
            <img className="zoom" style = {{ "width":"17%" }} src="http://www.stickpng.com/assets/images/5847f5bdcef1014c0b5e489c.png" alt=""></img>
          </Link>
          <Link to={"/quiz/CSS"} onClick={this.getData.bind(this, "CSS")}>
            <img className="zoom" style = {{ "width":"17%" }} src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png" alt=""></img>
          </Link>
          <Link to={"/quiz/JS"} onClick={this.getData.bind(this, "JS")}>
            <img className="zoom" style = {{ "width":"20%" }} src="https://fuzati.com/wp-content/uploads/2016/12/JS-Logo.png" alt=""></img>
          </Link>
          <Link to={"/quiz/SQL"} onClick={this.getData.bind(this, "SQL")}>
            <img className="zoom" style = {{ "width":"20%" }} src="https://clipart.info/images/ccovers/1499794875MySQL-logo-png-transparent.png" alt=""></img>
          </Link>
          <Link to={"/quiz/MONGO"} onClick={this.getData.bind(this, "MONGO")}>
            <img className="zoom" style = {{ "width":"24%" }} src="http://pluspng.com/img-png/logo-mongodb-png-file-mongodb-logo-svg-1280.png" alt=""></img>
          </Link>



        </Activities>
                {this.state.questions.map(item => (
                    <QuizQuestion
                        question={item.question}
                        a={item.answers[0]}
                        b={item.answers[1]}
                        c={item.answers[2]}
                        d={item.answers[3]}
                    />
                ))}
            </div>
        )
    }
}

export default Quiz;
