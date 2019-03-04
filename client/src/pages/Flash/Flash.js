import React, { Component } from 'react';
import './Flash.css';

class Flash extends Component {
  render() {
    return (
        <div>
        <h1 style = {{"textAlign":"center","color":"white"}}>Study with Flash cards</h1>
      <div className = "grid-container">
          <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
    <h1>What does HTML stand for?</h1>
    </div>
    <div className="flip-card-back">
      <h1>Hyper Text Markup Language</h1> 
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
    <h1>Fundamental HTML Block is known as ___________.</h1>
    </div>
    <div className="flip-card-back">
      <h1>HTML Tag</h1> 
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
    <h1>Apart from 'b' tag, what other tag makes text bold ?</h1>
    </div>
    <div className="flip-card-back">
      <h1>The strong tag</h1> 
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
    <h1>What should be the first tag in any HTML document?</h1>
    </div>
    <div className="flip-card-back">
      <h1>The HTML tag</h1> 
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
    <h1>How can you make a bulleted list with numbers?</h1>
    </div>
    <div className="flip-card-back">
      <h1>Using an ol tag</h1> 
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
    <h1>What tag is used to display a picture in a HTML page?</h1>
    </div>
    <div className="flip-card-back">
      <h1>An img tag</h1> 
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
    <h1>HTML web pages can be read and rendered by _________.</h1>
    </div>
    <div className="flip-card-back">
      <h1>Web Browser</h1> 
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
    <h1>HTML tags are surrounded by which type of brackets.</h1>
    </div>
    <div className="flip-card-back">
      <h1>Angle brackets</h1> 
    </div>
  </div>
</div>
        </div>
        </div>
    );
  }
}

export default Flash;