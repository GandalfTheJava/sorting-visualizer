import sortedActionTypes from "./sorted.types";

export const setCurrentSorted = (newSorted) => ({
    type: sortedActionTypes.SET_CURRENT_SORTED,
    payload: newSorted
});