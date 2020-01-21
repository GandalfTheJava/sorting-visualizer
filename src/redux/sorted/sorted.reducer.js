import sortedActionTypes from "./sorted.types";

const INITIAL_STATE = [];

const sortedReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case sortedActionTypes.SET_CURRENT_SORTED:
            if (action.payload.length) {
                return (state.concat(action.payload))
            } else {
                return []
            }

        default: return state
    }
}
export default sortedReducer;
