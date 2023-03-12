// Main reducer file...!

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Note: Importing required reducers...!
import authReducer from "./auth-reducer/auth-reducer";
import appReducer from "./auth-reducer/app-reducer";

// Note: User session maintain configuration...!
const persistConfig = {
    key: "root",
    storage: storage,
    whiteList: ["authStates"]
};

const rootReducer = combineReducers({
    authStates: authReducer,
    appStates: appReducer
});

export default persistReducer(persistConfig, rootReducer);