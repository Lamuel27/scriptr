import React, { Component } from 'react';
import Companies from '../../components/Companies';
import './Home.css';


class Home extends Component {
  render() {
    return (
      <div>
        <h2 style={{ "textAlign": "center", "color":"white","fontFamily":"Montserrat, sans-serif" }}>Other great learning resources:</h2>
        <Companies />
      </div>
    );
  }
}

export default Home;
