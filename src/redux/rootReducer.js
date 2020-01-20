import { combineReducers } from 'redux';
//IMPORT THE REDUCERS HERE
import arrayReducer from "./array/array.reducer";
import swapperReducer from './swappers/swappers.reducer';
import isRunningReducer from "./isRunning/isRunning.reducer";
import sortedReducer from "./sorted/sorted.reducer";
import bubbleSortReducer from './bubbleSort/bubbleSort.reducer';

export default combineReducers({
    array: arrayReducer,
    swapper: swapperReducer,
    isRunning: isRunningReducer,
    currentSorted: sortedReducer,
    currentBubbleTwo: bubbleSortReducer
});
