import './assets/css/main.css';

import registerServiceWorker from './registerServiceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './app/store/reducers';

import { loadState, saveState } from './app/service/localStorage';
import RouterContainer from "./app/router";



const persistedState = loadState();
const store = createStore(reducers,
    persistedState,
    composeWithDevTools(
    applyMiddleware(thunk)
));

// store.subscribe(()=>{
//   saveState(store.getState())
// });


ReactDOM.render(
    <Provider store={store}>
      <RouterContainer/>
    </Provider>
  , document.getElementById('root'));

registerServiceWorker();
