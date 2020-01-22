import React, { Component } from 'react';
import { Dropdown, DropdownButton } from "react-bootstrap";
import "./Toolbar.css";

class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount = () => {
        this.generateNewArray(); //Generate a new random assortment of numbers (10)
    }
    generateNewArray = () => {
        let { changeArrayNumbers } = this.props;
        const { arraySize } = this.props.array;
        let newArray = []
        for (let i = 0; i < arraySize; i++) {
            let randomNumber = Math.floor(Math.random() * 700) + 1;
            newArray.push(randomNumber);
        }
        changeArrayNumbers(newArray);
    }
    handleChange = (e) => {
        let { changeArraySize } = this.props;
        changeArraySize(e.target.value);
        this.generateNewArray();
    }
    render() {
        let { array, sort, setCurrentAlgorithm } = this.props;
        return (
            <div className="toolbar-container">
                <div className="algo-container">
                    <div className="algo-button">
                        <DropdownButton id="dropdown" title="Choose an Algorithm">
                            <Dropdown.Item id="Algorithm 1">Algorithm 1</Dropdown.Item>
                            <Dropdown.Item id="Algorithm 2">Algorithm 2</Dropdown.Item>
                            <Dropdown.Item id="Algorithm 3">Algorithm 3</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div className="control-buttons">
                        <button onClick={() => sort((array.arrayOfNumbers.length ? array.arrayOfNumbers : null), setCurrentAlgorithm("HERE WE ARE"))}>Sort</button>
                        <button onClick={this.generateNewArray}>RESET!</button>
                    </div>
                </div>
                <div className="range-selector">
                    <div className="range">
                        CURRENT ARRAY SIZE= {array.arraySize}
                        <input type="range" min="10" max="100" defaultValue={array.arraySize} id="arraySize" onChange={this.handleChange} />
                    </div>
                    <div className="separator"></div>
                    <div className="range">
                        CHANGE SORT SPEED =10
                        <input type="range" min="10" max="100" defaultValue={array.arraySize} id="arraySize" onChange={this.handleChange} />
                    </div>
                </div>
            </div >
        );
    }
}
export default Toolbar;
