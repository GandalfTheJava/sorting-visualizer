import algorithmActionTypes from "./algorithm.types";

const INITIAL_STATE = "Choose an Algorithm!";

const algorithmReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case (algorithmActionTypes.SET_CURRENT_ALGORITHM):
            return (action.payload)
        default:
            return state
    }
}

export default algorithmReducer;