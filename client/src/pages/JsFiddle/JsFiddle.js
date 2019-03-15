import React, { Component } from 'react';
import Fiddle from '../../components/Fiddle'
import './JsFiddle.css';
import API from "../../utils/API";
import $ from "jquery";


class JsFiddle extends Component {
  style = {
    submitButtonStyle: {
      "display": "none",
      "textAlign": "center",
      "marginLeft": "auto",
      "marginRight": "auto"
    }
  }

  state = {
    questions: []
  };

   componentDidMount() {
    API.getTypeQuestions("FIDDLE")
      .then(data => {
        console.log("Questions:");
        console.log(data.data);
        var questions = [];
        console.log("Questions:");
        console.log(data);
        for (var i = 0; i < 1; i++) {
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
        // this.setState({ questions: data.data })
      .catch(err => console.log(err));
      $("#refreshButton").attr("style", "display: block; text-align: center; margin-left: auto; margin-right: auto")

  };

  refresh = () => {
    API.getTypeQuestions("FIDDLE")
    .then(data => {
      console.log("Questions:");
      console.log(data.data);
      var questions = [];
      console.log("Questions:");
      console.log(data);
      for (var i = 0; i < 1; i++) {
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
      // this.setState({ questions: data.data })
    .catch(err => console.log(err));  }

  render() {
    return (
      <div><h3 style = {{ "textAlign":"center", "color":"white","fontFamily":"Montserrat, sans-serif"}}>Manipulate the code below and see how the elements change!</h3>
             {this.state.questions.map(item => (
               <h2 style = {{ "textAlign":"center", "color":"white", "fontWeight":"bold","fontFamily":"Montserrat, sans-serif"}}>{item.question}</h2>
             ))}
             <button
          id="refreshButton"
          style={this.style.refreshButtonStyle}
          className="waves-effect waves-light btn modal-trigger"
          onClick={this.refresh}
        >
          New Challenge
        </button>

        <Fiddle />
        </div>
    );
  }
}

export default JsFiddle;