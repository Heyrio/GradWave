import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Login from './containers/Login'
import MainUserContainer from './containers/MainUserContainer'
// ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/Dashboard" component={MainUserContainer} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))