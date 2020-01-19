import { combineReducers } from 'redux';
//IMPORT THE REDUCERS HERE
import arrayReducer from "./array/array.reducer";

export default combineReducers({
    arraySize: arrayReducer
});
