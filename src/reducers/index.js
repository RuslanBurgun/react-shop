import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import phones from './phones';
import phonePage from './phonePage';
import phonesPage from './phonesPage';
import basket from './basket';

export default combineReducers({
  routing: routerReducer,
  phones,
  phonePage,
  phonesPage,
  basket
});