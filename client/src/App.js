import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import Sidebar from './components/Sidebar';
import ProfileCard from './components/ProfileCard'
import ActivityCard from './components/ActivityCard'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



class App extends Component {
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
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }
  
  render() {
    const { isAuthenticated, userProfile, getProfile } = this.props.auth;
    return (
      <div>
        <Sidebar name = {this.props}/>
        {/* <Navbar fluid>
          <Navbar.Header> */}
            {/* <Navbar.Brand>
              <a onClick={this.goTo.bind(this, 'home')}>Welcome to scriptr!</a>
            </Navbar.Brand> */}
 

            {/* <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button> */}
            {/* {!isAuthenticated() &&
              <Button
                id="qsLoginBtn"
                bsStyle="primary"
                className="btn-margin"
                onClick={this.login.bind(this)}
              >
                Log In
              </Button>} */}
            {/* {isAuthenticated() &&
              <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, 'profile')}
              >
                Profile
              </Button>} */}
            {/* {isAuthenticated() &&
              <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, 'activities')}
              >
                Activities
              </Button>} */}
            {/* {isAuthenticated() &&
              <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, 'quiz')}
              >
                Quiz
          </Button>} */}
            {/* {isAuthenticated() &&
              <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, 'fiddle')}
              >
                Fiddle
           </Button>} */}
           
            {isAuthenticated() && this.props.location.pathname !== "/fiddle" &&
              <ProfileCard name = {this.props} onClick={this.goTo.bind(this, 'profile')} />}

            
            {/* {isAuthenticated() &&
              <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.renewToken.bind(this)}
              >
                Renew Token
              </Button>} */}
              {/* {isAuthenticated() &&
              <Button
                id="qsLogoutBtn"
                bsStyle="primary"
                className="btn-margin"
                onClick={this.logout.bind(this)}
                >
                Log Out
              </Button>}
          </Navbar.Header>
        </Navbar> */}
      </div>
    );
  }
}

export default App;
