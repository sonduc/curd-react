import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";

import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.jsx";
import RTL from "layouts/RTL.jsx";

import "assets/css/material-dashboard-react.css?v=1.6.0";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/index';

const hist = createBrowserHistory();

const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={ store }>
    <Router history={hist}>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/rtl" component={RTL} />
        <Redirect from="/" to="/admin/category" />
      </Switch>
    </Router>,
  </Provider>,
  document.getElementById("root")
);
