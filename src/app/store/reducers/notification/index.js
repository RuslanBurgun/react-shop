import { FETCH_PHONES_FAILURE, LOAD_MORE_PHONES_FAILURE, FETCH_PHONE_BY_ID_FAILURE } from "../../../constant/actionTypes";


const initialState = {
  err:'',
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONES_FAILURE:
    case LOAD_MORE_PHONES_FAILURE:
    case FETCH_PHONE_BY_ID_FAILURE:
      return Object.assign({}, state, {
        err: payload.message,
        type:'error'
      });

    default:
      return state
  }
}