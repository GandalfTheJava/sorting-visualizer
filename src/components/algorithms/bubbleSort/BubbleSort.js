import { setCurrentBubbleSort } from "../../../redux/bubbleSort/bubbleSort.actions"; //Bubble sort reducer
import { currentSwappers } from "../../../redux/swappers/swappers.actions";
import { changeArrayNumbers } from "../../../redux/array/array.actions"; //Handles changes to the array
import { setCurrentSorted } from "../../../redux/sorted/sorted.actions"; //Set the order of the currently sorted
import { toggleIsRunning } from "../../../redux/isRunning/isRunning.actions"; //Toggles true/false depending on current state of the algorithm

function BubbleSort(defaultArray, dispatch) {
    let currentArray = defaultArray.slice(0),
        toDispatch = [],
        sorted = false,
        round = 0;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < currentArray.length - 1 - round; i++) {
            toDispatch.push([i, i + 1]);
            if (currentArray[i] > currentArray[i + 1]) {
                toDispatch.push([i, i + 1, true]);
                let temp = currentArray[i];
                currentArray[i] = currentArray[i + 1];
                currentArray[i + 1] = temp;
                sorted = false;
                toDispatch.push(currentArray.slice(0));
                toDispatch.push([]);
            }
        }
        toDispatch.push([true, currentArray.length - 1 - round]);
        round++;
    }
    handleDispatch(toDispatch, dispatch, currentArray);
    return currentArray;
}

function handleDispatch(toDispatch, dispatch, array) {
    if (!toDispatch.length) {
        dispatch(setCurrentBubbleSort(array.map((element, index) => index)));
        setTimeout(() => {
            dispatch(setCurrentBubbleSort([]));
            dispatch(setCurrentSorted(array.map((element, index) => index)));
            dispatch(toggleIsRunning());
        }, 50); //Final iteration once the sorting is completed
        return;
    }
    let dispatchFunction = toDispatch[0].length > 3 ? changeArrayNumbers
        :
        toDispatch[0].length === 3 || toDispatch[0].length === 0 ? currentSwappers
            :
            toDispatch[0].length === 2 && typeof toDispatch[0][0] === 'boolean' ?
                setCurrentSorted : setCurrentBubbleSort;

    dispatch(dispatchFunction(toDispatch.shift()));
    setTimeout(() => {
        handleDispatch(toDispatch, dispatch, array);
    }, 10); //Per cycle of dispatch

}

export default BubbleSort;


