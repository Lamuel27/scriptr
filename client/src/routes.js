import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import App from './App';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Quiz from './pages/Quiz/Quiz';
import JsFiddle from './pages/JsFiddle/JsFiddle';
import ActivitySelect from './pages/ActivitySelect/ActivitySelect';
import FlashCSS from './pages/Flash/FlashCSS';
import FlashJS from './pages/Flash/FlashJS';
import FlashSQL from './pages/Flash/FlashSQL';
import FlashMongo from './pages/Flash/FlashMongo';
import Flash from './pages/Flash/Flash';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Route path="/" render={props => <App auth={auth} {...props} />} />
        <Route path="/home" render={props => <Home auth={auth} {...props} />} />
        <Route
          path="/profile"
          render={props =>
            !auth.isAuthenticated()
              ? <Redirect to="/home" />
              : <Profile auth={auth} {...props} />}
        />
        <Route
          path="/activities"
          render={props =>
            !auth.isAuthenticated()
              ? <Redirect to="/home" />
              : <ActivitySelect auth={auth} {...props} />}
        />
        <Route
          path="/flash"
          render={props =>
            !auth.isAuthenticated()
              ? <Redirect to="/home" />
              : <ActivitySelect auth={auth} {...props} />}
        />
        <Route
          path="/flash/HTML"
          render={props =>
            !auth.isAuthenticated()
              ? <Redirect to="/home" />
              : <Flash auth={auth} {...props} />}
        />
        <Route
          path="/flash/JS"
          render={props =>
            !auth.isAuthenticated()
              ? <Redirect to="/home" />
              : <FlashJS auth={auth} {...props} />}
        />
        <Route
          path="/flash/SQL"
          render={props =>
            !auth.isAuthenticated()
              ? <Redirect to="/home" />
              : <FlashSQL auth={auth} {...props} />}
        />
        <Route
          path="/flash/MONGO"
          render={props =>
            !auth.isAuthenticated()
              ? <Redirect to="/home" />
              : <FlashMongo auth={auth} {...props} />}
        />
        <Route
          path="/flash/CSS"
          render={props =>
            !auth.isAuthenticated()
              ? <Redirect to="/home" />
              : <FlashCSS auth={auth} {...props} />}
        />
        <Route
          path="/quiz"
          render={props =>
            !auth.isAuthenticated()
              ? <Redirect to="/home" />
              : <Quiz auth={auth} {...props} />}
        />
        <Route
          path="/fiddle"
          render={props =>
            !auth.isAuthenticated()
              ? <Redirect to="/home" />
              : <JsFiddle auth={auth} {...props} />}
        />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
      </div>
    </Router>
  );
};
