// Note: Auth Reducer...!
import { CART_ITEMS, LOGIN_USER, LOG_OUT_USER, CLEAR_CART } from "../../action-types/action-types";

// Note: Handeling states here...!
const INIT_STATE = {
    authenticatedUser: null,
    cartData: []
};

const authReducer = (state = INIT_STATE, action) => {
    switch (action.type) {

        case CLEAR_CART:
            return {
                ...state,
                cartData: []
            };

        case CART_ITEMS:
            let cartClone = [];
            cartClone = action.payload

            return {
                ...state,
                cartData: cartClone
            };

        case LOGIN_USER:
            // console.log(action.payload);

            return {
                ...state,
                authenticatedUser: action.payload
            }

        case LOG_OUT_USER:
            return {
                ...state,
                authenticatedUser: null,
                cartData: []
            }

        default:
            return state;
    };
};

export default authReducer;