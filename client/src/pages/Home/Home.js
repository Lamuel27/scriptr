import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron'

class Home extends Component {
  render() {
    const { isAuthenticated, login, getExpiryDate } = this.props.auth;
    return (
        <Jumbotron />
        
    );
  }
}

export default Home;
