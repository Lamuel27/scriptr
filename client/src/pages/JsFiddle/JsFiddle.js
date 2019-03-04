import React, { Component } from 'react';
import Fiddle from '../../components/CodeFix'
import './JsFiddle.css';

class JsFiddle extends Component {
  render() {
    return (
      <div><h2 style = {{ "textAlign":"center", "color":"white"}}>Manipulate the code below and see how the elements change!</h2>
        <Fiddle />
        </div>
    );
  }
}

export default JsFiddle;