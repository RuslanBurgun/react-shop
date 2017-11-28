import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import phones from './phone/phones';
import phonePage from './phone/phonePage';
import phonesPage from './phone/phonesPage';
import basket from './basket/basket';
import categories from './category/categories';
import notification from './notification';


export default combineReducers({
  routing: routerReducer,
  phones,
  phonePage,
  phonesPage,
  basket,
  categories,
  notification
});