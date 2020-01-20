import { connect } from 'react-redux';
import Body from './Body';

const mapStateToProps = ({
    array,
    currentBubbleTwo,
    currentSorted,
    swapper
}) => ({
    array,
    currentBubbleTwo,
    currentSorted,
    swapper
});

export default connect(mapStateToProps)(Body);