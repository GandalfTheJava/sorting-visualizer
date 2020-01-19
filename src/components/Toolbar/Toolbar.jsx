import React, { Component } from 'react';
import "./Toolbar.css";

class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount = () => {
        //const { generateNewArray } = this.props; //Call generate new array action on component mount

        //generateNewArray(20);
    }
    handleClick(algorithm) {
        //const { chosenAlgorithm } = this.props; //Update the algorithm chosen

        //chosenAlgorithm(algorithm); //Call this action to update the chosen algorithm
    }
    handleChange(e) {
        //WILL CONTAIN THE SLIDER VALUES FOR EITHER ARRAY/SORTSPEED 
    }
    render() {
        //const { array, generateNewArray, algorithm, sort } = this.props
        return (
            <div className="toolbar-container">
                <button>Sort</button>

                <button>Generate new Array</button>
                {
                    console.log(this.props)
                }
                <div>
                    <input type="range" min="10" max="100" id="arraySize" /><br></br>
                    Change array size
                </div>
            </div >
        );
    }
}

export default Toolbar;
