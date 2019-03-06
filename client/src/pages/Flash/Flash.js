import React, { Component } from 'react';
import './Flash.css';
import Flashcard from '../../components/Flashcard';

class Flash extends Component {
  render() {
    return (
      <div>
        <h1 style={{ "textAlign": "center", "color": "white" }}>Study with Flash cards</h1>
        <div className="grid-container">
          <Flashcard
          front="You are..."
          back="GAY"
          />
        </div>
      </div>
    );
  }
}

export default Flash;