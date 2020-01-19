import swapperActionTypes from "./swappers.types";

const INITIAL_STATE = [];

const swapperReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case (swapperActionTypes.SET_CURRENT_SWAPPERS):
            return state.concat(action.payload)
        default:
            return state;
    }
}

export default swapperReducer;

