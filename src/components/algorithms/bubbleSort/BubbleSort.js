import { setCurrentBubbleSort } from "../../../redux/bubbleSort/bubbleSort.actions"; //Bubble sort reducer
import { currentSwappers } from "../../../redux/swappers/swappers.actions";
import { changeArrayNumbers } from "../../../redux/array/array.actions"; //Handles changes to the array
import { setCurrentSorted } from "../../../redux/sorted/sorted.actions"; //Set the order of the currently sorted
import { toggleIsRunning } from "../../../redux/isRunning/isRunning.actions"; //Toggles true/false depending on current state of the algorithm

function BubbleSort(defaultArray, dispatch, sortSpeed) {
    let currentArray = defaultArray.slice(0),
        toRender = [],
        sorted = false,
        round = 0;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < currentArray.length - 1 - round; i++) {
            toRender.push([i, i + 1]);
            if (currentArray[i] > currentArray[i + 1]) {
                toRender.push([i, i + 1, true]);
                let temp = currentArray[i];
                currentArray[i] = currentArray[i + 1];
                currentArray[i + 1] = temp;
                sorted = false;
                toRender.push(currentArray.slice(0));
                toRender.push([]);
            }
        }
        toRender.push([true, currentArray.length - 1 - round]);
        round++;
    }
    handleDispatch(toRender, dispatch, currentArray, sortSpeed);
    return currentArray;
}

function handleDispatch(toRender, dispatch, array, sortSpeed) {
    if (!toRender.length) {
        dispatch(setCurrentBubbleSort(array.map((element, index) => index)));
        setTimeout(() => {
            dispatch(setCurrentBubbleSort([]));
            dispatch(setCurrentSorted(array.map((element, index) => index)));
            dispatch(toggleIsRunning());
        }, 500); //Final iteration once the sorting is completed
        return;
    }
    let dispatchFunction = toRender[0].length > 3 ? changeArrayNumbers
        :
        toRender[0].length === 3 || toRender[0].length === 0 ? currentSwappers
            :
            toRender[0].length === 2 && typeof toRender[0][0] === 'boolean' ?
                setCurrentSorted : setCurrentBubbleSort;
    dispatch(dispatchFunction(toRender.shift()));
    setTimeout(() => {
        handleDispatch(toRender, dispatch, array, sortSpeed);
    }, sortSpeed); //Per cycle of dispatch

}

export default BubbleSort;


