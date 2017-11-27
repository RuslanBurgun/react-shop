import './main.css';

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
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Layout from './containers/layout';
import Phone from './containers/phone';
import Phones from './containers/phones';
import Basket from './containers/basket';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = createStore(reducers,
    persistedState,
    composeWithDevTools(
    applyMiddleware(thunk)
));

store.subscribe(()=>{
  saveState(store.getState())
});

const cHistory = createBrowserHistory();

const history = syncHistoryWithStore(cHistory, store);

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path="/phones/:id" component={Phone} />
            <Route path="/basket" component={Basket} />
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
