import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history'

import reducers from './reducers';
import { Provider } from "react-redux";
 // import {Router, Route, Link } from "react-router";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Layout from './containers/layout';
import Phone from './containers/phone';
import Phones from './containers/phones';


const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

const cHistory = createBrowserHistory();

const history = syncHistoryWithStore(cHistory, store);

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path="/phones/:id" component={Phone} />
            <Layout>
              <Route exact path="/" component={Phones} />
              <Route path="/categories/:id" component={Phones} />
            </Layout>
          </Switch>
        </div>
      </Router>
    </Provider>
  , document.getElementById('root'));

registerServiceWorker();
