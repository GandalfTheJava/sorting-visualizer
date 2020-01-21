import { connect } from 'react-redux';
import Body from './Body';

const mapStateToProps = ({
    array,
    currentBubbleTwo,
    currentSorted
}) => ({
    array,
    currentBubbleTwo,
    currentSorted
});

export default connect(mapStateToProps)(Body);