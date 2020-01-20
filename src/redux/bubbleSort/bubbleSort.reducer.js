import bubbleSortActionTypes from "./bubbleSort.types";

const INITIAL_STATE = [];

const bubbleSortReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case (bubbleSortActionTypes.SET_CURRENT_BUBBLE):
            return {
                ...state.concat(action.payload)
            }
    }
}

export default bubbleSortReducer;

