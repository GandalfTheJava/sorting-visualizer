import { combineReducers } from 'redux';
//IMPORT THE REDUCERS HERE
import arrayReducer from "./array/array.reducer";
import swapperReducer from './swappers/swappers.reducer';

export default combineReducers({
    array: arrayReducer,
    swappers: swapperReducer
});
