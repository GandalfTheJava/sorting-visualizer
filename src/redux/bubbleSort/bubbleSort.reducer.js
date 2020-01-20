import bubbleSortActionTypes from "./bubbleSort.types";

const INITIAL_STATE = [];

const bubbleSortReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case (bubbleSortActionTypes.SET_CURRENT_BUBBLE):
            return (action.payload)
        default:
            return state

    }
}

export default bubbleSortReducer;

