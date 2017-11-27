import {ADD_PHONE_TO_BASKET, CLEAN_BASKET, REMOVE_PHONE_FROM_BASKET} from "../../../constant/actionTypes";


export const addPhoneToBasket = id => dispatch => {
    dispatch({
        type: ADD_PHONE_TO_BASKET,
        payload: id
    })
};


export const removePhoneFromBasket = id => dispatch => {
    dispatch({
        type: REMOVE_PHONE_FROM_BASKET,
        payload: id
    })
};

export const cleanBasket = () =>  dispatch => {
    dispatch({
        type: CLEAN_BASKET
    })
};

export const basketCheckout = phones => () => {
    alert(JSON.stringify(phones));
};