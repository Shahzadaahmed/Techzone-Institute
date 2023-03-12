// Note: App Reducer...!
import { FETCH_ALL_PRODUCTS } from "../../action-types/action-types";

// Note: Handeling states here...!
const INIT_STATE = {
    productsList: []
};

const appReducer = (state = INIT_STATE, action) => {
    switch (action.type) {

        case FETCH_ALL_PRODUCTS:
            // console.log('Payload: ', action.payload);
            let allProductsClone = [...state.productsList];
            allProductsClone = action.payload;

            return {
                ...state,
                productsList: action.payload
            };

        default:
            return state;
    };
};

export default appReducer;