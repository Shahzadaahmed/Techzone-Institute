// NOte: All profile actions function are defined here...!

import { HANDLE_NAME_STATE, UPDATE_NAME_STATE } from "../../action-types/action-types";


const updateNameState = () => {
    return (dispatch) => {
        // console.log('action func is running!');

        dispatch({
            type: HANDLE_NAME_STATE
        });
    };
};

const changeNameState = (data) => {
    return (dispatch) => {
        // console.log('Yesssssssss', data);

        dispatch({
            type: UPDATE_NAME_STATE,
            payload: data
        });
    }
};

export {
    updateNameState,
    changeNameState
};