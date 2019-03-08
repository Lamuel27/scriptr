import React, { Component } from 'react';
import './Flash.css';
import Flashcard from '../../components/Flashcard';
import API from '../../utils/API'

class FlashMongo extends Component {

  state = {
    questions: []
  };

  componentDidMount() {
    API.getTypeQuestions("MONGO")
      .then(data => {
        console.log("Questions:");
        console.log(data.data);
        this.setState({ questions: data.data })
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <h1 style={{ "textAlign": "center", "color": "white" }}>Study with Flash cards</h1>
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

export default FlashMongo;