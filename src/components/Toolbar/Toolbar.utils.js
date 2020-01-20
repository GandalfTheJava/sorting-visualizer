import { connect } from 'react-redux';
import { changeArrayNumbers, changeArraySize } from "../../redux/array/array.actions";
import { toggleIsRunning } from "../../redux/isRunning/isRunning.actions";
import { setCurrentSorted } from '../../redux/sorted/sorted.actions';
import BubbleSort from '../algorithms/bubbleSort/BubbleSort';
import Toolbar from './Toolbar';

const mapStateToProps = ({
    array,
    isRunning
}) => ({
    array,
    isRunning
});

const mapDispatchToProps = (dispatch) => ({
    changeArrayNumbers: newArray => dispatch(changeArrayNumbers(newArray)),
    changeArraySize: newSize => dispatch(changeArraySize(newSize)),
    toggleIsRunning: () => dispatch(toggleIsRunning()),
    sort: (array) => (
        dispatch(setCurrentSorted([])),
        dispatch(toggleIsRunning()),
        BubbleSort(array, dispatch)
    )
});
export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);



