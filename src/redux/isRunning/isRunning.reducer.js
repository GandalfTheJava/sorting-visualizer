import isRunningActionTypes from "./isRunning.types";

const INITIAL_STATE = {
    isRunning: false
};

const isRunningReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case isRunningActionTypes.TOGGLE_IS_RUNNING:
            return {
                ...state,
                isRunning: !state.isRunning//Flip the current state
            }
        default:
            return state;
    }
}

export default isRunningReducer;