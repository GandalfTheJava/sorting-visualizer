import { combineReducers } from 'redux';
//IMPORT THE REDUCERS HERE
import arrayReducer from "./array/array.reducer";
import swapperReducer from './swappers/swappers.reducer';
import isRunningReducer from "./isRunning/isRunning.reducer";

export default combineReducers({
    array: arrayReducer,
    swapper: swapperReducer,
    isRunning: isRunningReducer
});
