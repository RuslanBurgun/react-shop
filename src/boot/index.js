import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../app/store/reducers';

import { loadState, saveState } from '../app/service/localStorage';
import RouterContainer from "../router";



const persistedState = loadState();
const store = createStore(reducers,
    //persistedState,
    composeWithDevTools(
        applyMiddleware(thunk)
    ));

store.subscribe(()=>{
  //saveState(store.getState())
});


const App = () => (
    <Provider store={store}>
      <RouterContainer/>
    </Provider>
);

export default App;