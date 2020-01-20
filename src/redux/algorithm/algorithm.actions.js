import algorithmActionTypes from "./algorithm.types";

export const setCurrentAlgorithm = (algorithm) => ({
    type: algorithmActionTypes.SET_CURRENT_ALGORITHM,
    payload: algorithm
})