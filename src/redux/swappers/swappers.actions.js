import swapperActionTypes from "./swappers.types";

export const currentSwappers = (elements) => ({
    type: swapperActionTypes.SWAP,
    payload: elements
});
