import { connect } from "react-redux";
import { setCurrentBubbleSort } from "../../../redux/bubbleSort/bubbleSort.actions"; //Bubble sort reducer
import { changeArrayNumbers } from "../../../redux/array/array.actions"; //Handles changes to the array
import { currentSwappers } from "../../../redux/sorted/sorted.actions"; //Insert current elements being compared
import { setCurrentSorted } from "../../../redux/sorted/sorted.actions"; //Set the order of the currently sorted
import { toggleIsRunning } from "../../../redux/isRunning/isRunning.actions"; //Toggles true/false depending on current state of the algorithm

let { setCurrentBubbleSort, changeArrayNumbers, currentSwappers, setCurrentSorted, toggleIsRunning } = this.props;
function BubbleSort() {
    let currentArray = this.props.array.arrayOfNumbers.slice(), //Copy of the current array
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
    handleDispatch(toDispatch, currentArray); //WHAT IS THE DISPATCH PARAMETER?
    return currentArray;
}

function handleDispatch(toDispatch, currentArray) {
    if (!toDispatch.length) {
        setCurrentBubbleSort(currentArray.map((element, index) => index));
        setTimeout(() => {
            setCurrentBubbleSort([]);
            setCurrentSorted(currentArray.map((element, index) => index));
            toggleIsRunning();
        })
    }
    let dispatchFunction = toDispatch[0].length > 3 ?
        changeArrayNumbers : toDispatch[0].length === 3 || toDispatch[0].length === 0 ?
            currentSwappers : toDispatch[0].length === 2 && typeof toDispatch[0][0] === 'boolean' ?
                setCurrentSorted : setCurrentBubbleSort;

    dispatchFunction(toDispatch.shift());
    setTimeout(() => {
        handleDispatch(toDispatch, currentArray);
    }, 500);

}

const mapStateToProps = () => {

}

const mapDispatchToProps = (dispatch) => {
    setCurrentBubbleSort = array => dispatch(setCurrentBubbleSort(array)),
        changeArrayNumbers = newArray => dispatch(changeArrayNumbers(newArray)),
        currentSwappers = elements => dispatch(currentSwappers(elements)),
        setCurrentSorted = newSorted => dispatch(setCurrentSorted(newSorted))
}

export default connect(mapStateToProps, mapDispatchToProps)(BubbleSort);


