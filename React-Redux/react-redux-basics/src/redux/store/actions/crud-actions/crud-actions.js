// All action functions related to crud are defined here...!

import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, DELETE_ALL } from "../../action-types/action-types";

// Note: Add item action function...!
const addItem = (formData) => {
    return (dispatch) => {
        // console.log("Form Data: ", formData);

        dispatch({
            type: ADD_ITEM,
            payload: formData
        });
    };
};

// Note: delete item action function...!
const deleteItem = (index) => {
    return (dispatch) => {
        // console.log("Key: ", index);

        dispatch({
            type: DELETE_ITEM,
            payload: index
        });
    };
};



// Note: update item action function...!
const updateItem = (formData) => {
    return (dispatch) => {
        // console.log("New Data: ", formData);

        dispatch({
            type: UPDATE_ITEM,
            payload: formData
        });
    };
};


// Note: update item action function...!
const removeAll = () => {
    return (dispatch) => {
        // console.log("hello!");

        dispatch({ type: DELETE_ALL });
    };
};

export {
    addItem,
    deleteItem,
    updateItem,
    removeAll
};