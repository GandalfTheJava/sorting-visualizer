import bubbleSortActionTypes from "./bubbleSort.types";

export const setCurrentBubbleSort = (currentBubble) => ({
    type: bubbleSortActionTypes.SET_CURRENT_BUBBLE,
    payload: currentBubble
});