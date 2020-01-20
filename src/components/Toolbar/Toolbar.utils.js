import { connect } from 'react-redux';
import { changeArrayNumbers, changeArraySize } from "../../redux/array/array.actions";
import { toggleIsRunning } from "../../redux/isRunning/isRunning.actions";

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
    toggleIsRunning: () => dispatch(toggleIsRunning())
});
export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);



