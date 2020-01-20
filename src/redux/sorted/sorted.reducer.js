import sortedActionTypes from "./sorted.types";

const INITIAL_STATE = [];

const sortedReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case sortedActionTypes.SET_CURRENT_SORTED:
            return (action.payload)

        default: return (state)
    }
}
export default sortedReducer;
