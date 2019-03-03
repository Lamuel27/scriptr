import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import Companies from '../../components/Companies';
import './Home.css';


class Home extends Component {
  render() {
    const { isAuthenticated, login, getExpiryDate } = this.props.auth;
    return (
      <div>
        <Jumbotron />
        <h2 style={{ "textAlign": "center" }}>Other great learning resources:</h2>
        <Companies />
      </div>
    );
  }
}

export default Home;
