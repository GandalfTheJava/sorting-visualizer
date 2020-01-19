import sortedActionTypes from "./sorted.types";

export const currentSorted = (newSorted) => ({
    type: sortedActionTypes.SET_CURRENT_SORTED,
    payload: newSorted
});