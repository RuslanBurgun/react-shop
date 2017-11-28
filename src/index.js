import './assets/css/main.css';

import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './boot/registerServiceWorker';
import App from "./boot";


ReactDOM.render(
   <App/>
  , document.getElementById('root'));

registerServiceWorker();
