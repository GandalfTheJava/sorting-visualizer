import React, { Component } from 'react';
import { connect } from "react-redux";
import { changeArrayNumbers, changeArraySize } from "../../redux/array/array.actions";
import "./Toolbar.css";

class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount = () => {
        this.generateNewArray(); //Generate a new random assortment of numbers (10)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.array !== this.props.array) {
            //UPDATE DOM COS SOMETHING CHANGED
        }
    }
    handleClick(algorithm) {
        //const { chosenAlgorithm } = this.props; //Update the algorithm chosen

        //chosenAlgorithm(algorithm); //Call this action to update the chosen algorithm
    }
    generateNewArray = () => {
        let { changeArrayNumbers } = this.props;
        const { arraySize } = this.props.array;
        let newArray = []
        for (let i = 0; i < arraySize; i++) {
            let randomNumber = Math.floor(Math.random() * 600) + 1;
            newArray.push(randomNumber);
        }
        changeArrayNumbers(newArray);
    }
    handleChange(e) {
        let { changeArraySize } = this.props;
        changeArraySize(e.target.value);
        this.generateNewArray();

    }
    render() {
        return (
            <div className="toolbar-container">
                <button>Sort</button>

                <button onClick={this.generateNewArray}>Generate new Array</button>
                <div>
                    <input type="range" min="10" max="100" defaultValue={this.props.array.arraySize} id="arraySize" onChange={this.handleChange} />
                    CURRENT ARRAY SIZE = {this.props.array.arraySize}
                </div>
            </div >
        );
    }
}

const mapStateToProps = ({ array }) => ({
    array
})
const mapDispatchToProps = (dispatch) => ({
    changeArrayNumbers: newArray => dispatch(changeArrayNumbers(newArray)),
    changeArraySize: newSize => dispatch(changeArraySize(newSize))
})
export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
