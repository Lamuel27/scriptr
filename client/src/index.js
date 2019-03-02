import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { makeMainRoutes } from './routes';

const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
