import { connect } from 'react-redux';
import { changeArrayNumbers, changeArraySize } from "../../redux/array/array.actions";
import { toggleIsRunning } from "../../redux/isRunning/isRunning.actions";
import { setCurrentSorted } from '../../redux/sorted/sorted.actions';
import { setCurrentAlgorithm } from "../../redux/algorithm/algorithm.actions";
import { changeSortSpeed } from "../../redux/sortSpeed/sortSpeed.actions";

import BubbleSort from '../algorithms/bubbleSort/BubbleSort';
import Toolbar from './Toolbar';

const mapStateToProps = ({
    array,
    isRunning,
    algorithm,
    sortSpeed,
    setCurrentSorted

}) => ({
    array,
    isRunning,
    sortSpeed,
    algorithm,
    setCurrentSorted
});

const mapDispatchToProps = (dispatch) => ({
    changeArrayNumbers: newArray => dispatch(changeArrayNumbers(newArray)),
    changeArraySize: newSize => dispatch(changeArraySize(newSize)),
    toggleIsRunning: () => dispatch(toggleIsRunning()),
    setCurrentAlgorithm: algorithm => dispatch(setCurrentAlgorithm(algorithm)),
    setCurrentSorted: (newSorted) => dispatch(setCurrentSorted(newSorted)),
    changeSortSpeed: (newSpeed) => dispatch(changeSortSpeed(newSpeed)),
    sort: (array, sortSpeed, algorithm) => {
        let algo = algorithm === 'BubbleSort' ? BubbleSort : null;
        if (algo !== null) {
            dispatch(setCurrentSorted([]));
            dispatch(toggleIsRunning());
            algo(array, dispatch, sortSpeed);
        } else { alert(algorithm) }
    }
}); //End of mapDispatch
export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);



