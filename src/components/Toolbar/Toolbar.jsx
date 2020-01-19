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
        let { changeArrayNumbers } = this.props
        let newArray = this.generateNewArray(); //Generate a new random assortment of numbers (10)
        changeArrayNumbers(newArray);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.array !== this.props.array) {
            console.log('summat changed homes')
        }
    }
    handleClick(algorithm) {
        //const { chosenAlgorithm } = this.props; //Update the algorithm chosen

        //chosenAlgorithm(algorithm); //Call this action to update the chosen algorithm
    }
    generateNewArray = () => {
        const { arraySize } = this.props.array;
        let newArray = []
        for (let i = 0; i < arraySize; i++) {
            let randomNumber = Math.floor(Math.random() * 100) + 1;
            newArray.push(randomNumber);
        }
        return newArray;
    }
    handleChange(e) {
        //WILL CONTAIN THE SLIDER VALUES FOR EITHER ARRAY/SORTSPEED 
    }
    render() {
        console.log(this.props);
        return (
            <div className="toolbar-container">
                <button>Sort</button>

                <button>Generate new Array</button>
                <div>
                    <input type="range" min="10" max="100" id="arraySize" />
                    Change array size
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
