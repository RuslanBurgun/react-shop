import { CLEAN_NOTIFICATION } from "../../../constant/actionTypes";


export const cleanNotification = () => dispatch => {
    dispatch({
        type: CLEAN_NOTIFICATION
    })
};