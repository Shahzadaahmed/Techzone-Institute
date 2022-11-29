// Main reducer file...!

import { combineReducers } from "redux";

// Note: Importing required reducers...!
import profileReducer from "./profile-reducer/profile-reducer";
import crudReducer from "./crud-reducer/crud-reducer";

const rootReducer = combineReducers({
    profileReducerState: profileReducer,
    crudStates : crudReducer
});

export default rootReducer;