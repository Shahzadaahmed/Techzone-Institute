// Note: All auth action function are defined here...!

import axios from "axios";
import { LOGIN_USER, LOG_OUT_USER, FETCH_ALL_PRODUCTS, CART_ITEMS, CLEAR_CART } from "../../action-types/action-types";

// Note: Function to sign up user...!
const signUpUser = (userData) => {
    return async (dispatch) => {
        console.log("User: ", userData);

        let apiUrl = "http://192.168.2.45:3005/api/add-user";

        try {
            let response = await axios({
                method: "POST",
                url: apiUrl,
                data: userData
            });
            console.log(response);

            if (response.status == 200) {
                alert(response.data.message);
            };
        }

        catch (error) {
            console.log("Something went wrong while integrating create user api: ", error);

            if (error.response.status == 400) {
                alert(error.response.data.message);
            }

            else if (error.response.status == 404) {
                alert(error.response.data.message);
            };
        };
    };
};

// Note: Function to log in user...!
const logInUser = (userData) => {
    return async (dispatch) => {
        console.log("User: ", userData);

        let apiUrl = "http://192.168.2.45:3005/api/login-user";

        try {
            let response = await axios({
                method: "POST",
                url: apiUrl,
                data: userData
            });
            console.log(response);

            if (response.status == 200) {
                alert(response.data.message);

                dispatch({
                    type: LOGIN_USER,
                    payload: response.data.data
                });
            };
        }

        catch (error) {
            console.log("Something went wrong while integrating login user api: ", error);

            // if (error.response.status == 400) {
            //     alert(error.response.data.message);
            // }
        };
    };
};

// Note: Function to log out user...!
const logOutUser = () => {
    return (dispatch) => {
        dispatch({
            type: LOG_OUT_USER
        });
        alert("You have logged out successfully!");
    };
};


// Note: Function to fetch all products...!
const fetchAllProducts = () => {
    return async dispatch => {

        let apiUrl = "http://192.168.2.45:3005/api/fetch/all-products";

        try {
            let response = await axios({
                method: "GET",
                url: apiUrl
            });
            // console.log(response);

            if (response.status == 200) {
                dispatch({
                    type: FETCH_ALL_PRODUCTS,
                    payload: response.data.data
                });
            }
        }

        catch (error) {
            console.log('Error: ', error);
        };
    }
};

// Note: Function to add items to cart...!
const addItemsToCart = (data) => {
    return (dispatch) => {
        // console.log("Data: ", data);

        data && dispatch({
            type: CART_ITEMS,
            payload: data
        });
    };
};

// FUnction to clear cart...!
const clearCart = () => {
    return dispatch => {
        dispatch({ type: CLEAR_CART });
        alert("Cart cleared!");
    }
}


// FUnction to delete item from cart...!
const deleteCartItem = (key) => {
    return dispatch => {
        console.log("Key: ", key);
        // dispatch({ type: CLEAR_CART });
    }
}

export {
    signUpUser,
    logInUser,
    logOutUser,
    fetchAllProducts,
    addItemsToCart,
    clearCart,
    deleteCartItem
};