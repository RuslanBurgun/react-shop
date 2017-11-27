import * as R from 'ramda';
import { FETCH_PHONES_SUCCESS, LOAD_MORE_PHONES_SUCCESS, SEARCH_PHONE} from "../../constant/actionTypes";


const initialState = {
  ids: [],
  search: ''
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return R.merge(state, {
        ids:R.pluck('id', payload)
      });
      case SEARCH_PHONE:
       return R.merge(state,{
             search: payload
      });
      case LOAD_MORE_PHONES_SUCCESS:
        const ids = R.pluck('id', payload);
        const answer = R.merge(state, {
          ids:R.concat(state.ids, ids) });
      return answer;

    default:
      return state
  }
}