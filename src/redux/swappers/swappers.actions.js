import swapperActionTypes from "./swappers.types";

export const currentSwappers = (elements) => ({
    type: swapperActionTypes.SET_CURRENT_SWAPPERS,
    payload: elements
});
