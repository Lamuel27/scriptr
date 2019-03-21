import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import Jumbotron from './components/Jumbotron';

class App extends Component {

  style = {
    pusher: {
      "height": "75px",
      "color": "white"
    }
  }

  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
    alert("You have been logged out of scriptr.  Come back soon!")
  }

  renewToken() {
    const { renewSession } = this.props.auth;
    renewSession();
  } z

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (

      <div>
        <Navbar name={this.props} />
        <div style={this.style.pusher}></div>
        <Jumbotron />

        {isAuthenticated() && this.props.location.pathname !== "/fiddle" && this.props.location.pathname !== "/profile" &&
          <ProfileCard name={this.props} onClick={this.goTo.bind(this, 'profile')} />}
        {isAuthenticated() && this.props.location.pathname !== "/flash" && this.props.location.pathname !== "/quiz" && this.props.location.pathname !== "/fiddle" &&
          <ProfileCard name={this.props} onClick={this.goTo.bind(this, 'profile')} />}

      </div>
    );
  }
}

export default App;
