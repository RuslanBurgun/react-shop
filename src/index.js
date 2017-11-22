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
import {Router, Route} from "react-router";

import Layout from './containers/layout';
import Phones from './containers/phones';


const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

const cHistory = createBrowserHistory();

const history = syncHistoryWithStore(cHistory, store);

ReactDOM.render(
    <Provider store={store}>
      <Router history={history} >
        <Layout>
          <Route path="/" component={Phones} />
        </Layout>
      </Router>
    </Provider>
  , document.getElementById('root'));

registerServiceWorker();
