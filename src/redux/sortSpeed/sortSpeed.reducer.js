import sortSpeedActionTypes from "./sortSpeed.types";

const INITIAL_STATE = {
    sortSpeed: 200
};

const sortSpeedReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case (sortSpeedActionTypes.CHANGE_SORT_SPEED):
            return {
                ...state,
                sortSpeed: action.payload
            }
        default: return state
    }
}

export default sortSpeedReducer;