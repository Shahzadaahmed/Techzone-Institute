// Crud reducer...!

import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, DELETE_ALL } from "../../action-types/action-types";

// Note: Handeling states here...!
const INIT_STATE = {
    dataList: []
};

const crudReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM:
            let dataListClone = state.dataList.slice(0);
            // let dataListClone = [...state.dataList];
            dataListClone.push(action.payload);

            return {
                ...state,
                dataList: dataListClone
            }

        case DELETE_ITEM:
            // console.log(action);
            let dataListCloneForD = [...state.dataList];
            dataListCloneForD.splice(action.payload, 1);

            return {
                ...state,
                dataList: dataListCloneForD
            }

        case UPDATE_ITEM:
            // console.log(action);
            let dataListCloneForU = [...state.dataList];
            dataListCloneForU.splice(action.payload.key, 1, action.payload.val);

            return {
                ...state,
                dataList: dataListCloneForU
            }

        case DELETE_ALL:
            let dataDeleted = [...state.dataList];
            // dataDeleted.splice(0, state.dataList.length);

            return {
                ...state,
                // dataList: dataDeleted
                dataList: []
            }

        default:
            return state;
    };
};

export default crudReducer;