import arrayActionTypes from "./array.types";
const INITIAL_STATE = {
    arraySize: 10,
    arrayOfNumbers: null
}

const arrayReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case arrayActionTypes.CHANGE_ARRAY_SIZE:
            return {
                ...state,
                arraySize: action.payload
            }
        case arrayActionTypes.CHANGE_ARRAY_NUMBERS:
            return {
                ...state,
                arrayOfNumbers: action.payload
            }
        default:
            return state;
    }
}

export default arrayReducer;

