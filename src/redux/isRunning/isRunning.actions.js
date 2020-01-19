import isRunningActionTypes from "./isRunning.types";

export const toggleIsRunning = (isRunning) => ({
    type: isRunningActionTypes.TOGGLE_IS_RUNNING,
    payload: isRunning
})