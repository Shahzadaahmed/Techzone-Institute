// Profile reducer...!

import { HANDLE_NAME_STATE, UPDATE_NAME_STATE } from "../../action-types/action-types";

// Note: Handeling states here...!
const INIT_STATE = {
    myName: "ahmed",
    usersList: []
};

const profileReducer = (state = INIT_STATE, action) => {
    switch (action.type) {

        case UPDATE_NAME_STATE:
            // console.log(action);

            return {
                ...state,
                myName: action.payload
            }

        case HANDLE_NAME_STATE:
            // console.log('Hm yahan tk pohanch gaye hen!');
            let updateName = "Muhammad AHmed";

            return {
                ...state,
                myName: updateName
            }

        default:
            return state;
    };
};

export default profileReducer;