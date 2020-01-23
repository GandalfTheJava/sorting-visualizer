import sortSpeedActionTypes from "./sortSpeed.types";

export const changeSortSpeed = (newSpeed) => ({
    type: sortSpeedActionTypes.CHANGE_SORT_SPEED,
    payload: newSpeed
})