import sortedActionTypes from "./sorted.types";

const INITIAL_STATE = {
    currentSorted: []
};

const sortedReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case sortedActionTypes.SET_CURRENT_SORTED:
            return {
                ...state,
                currentSorted: action.payload
            }
        default:
            return { ...state }

    }
}
export default sortedReducer;
