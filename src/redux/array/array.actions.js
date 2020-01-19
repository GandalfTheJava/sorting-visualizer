import { arrayActionTypes } from "./array.types";

export const changeArraySize = (newSize) => ({
    type: arrayActionTypes.CHANGE_ARRAY_SIZE,
    payload: newSize
});

export const changeArrayNumbers = (newArray) => ({
    type: arrayActionTypes.CHANGE_ARRAY_NUMBERS,
    payload: newSize
});

