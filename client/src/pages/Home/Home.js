import React, { Component } from 'react';
import ProfileCard from '../../components/ProfileCard'

class Home extends Component {
  render() {
    const { isAuthenticated, login, getExpiryDate } = this.props.auth;
    return (
      <div className="container">
        {!isAuthenticated() &&
          <h4>
            You are not logged in! Please{' '}
            <a style={{ cursor: 'pointer' }} onClick={login.bind(this)}>
              Log In
            </a>{' '}
            to continue.
          </h4>}
      </div>
    );
  }
}

export default Home;
