import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import { Motion, spring } from 'react-motion';

class App extends Component {

  style = {
    pusher: {
      "height": "75px",
      "color":"white"
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
  }z

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
        <Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
        {interpolatingStyle =>
        <div style={interpolatingStyle}>
        <Navbar name={this.props} />
        <div style={this.style.pusher}></div>

        {isAuthenticated() && this.props.location.pathname !== "/fiddle" && this.props.location.pathname !== "/profile" &&
          <ProfileCard name={this.props} onClick={this.goTo.bind(this, 'profile')} />}
</div>}
        </Motion>

      </div>
    );
  }
}

export default App;
