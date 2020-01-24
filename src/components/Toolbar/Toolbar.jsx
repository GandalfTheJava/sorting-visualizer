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
            let randomNumber = Math.floor(Math.random() * 650) + 1;
            newArray.push(randomNumber);
        }
        changeArrayNumbers(newArray);
    }
    handleChange = (e) => {
        let c = e.target.id.toString();
        if (c === "arraySize") {
            let { changeArraySize } = this.props;
            changeArraySize(e.target.value);
            this.generateNewArray();
        } else {
            let { changeSortSpeed } = this.props;
            changeSortSpeed(e.target.value);
        }
    }
    handleSort = (e) => {
        e.preventDefault();
        let { setCurrentAlgorithm } = this.props;
        setCurrentAlgorithm(e.target.text);
    }
    render() {
        let { array, sort, algorithm, sortSpeed } = this.props;
        let currentArray = array.arrayOfNumbers;
        let { isRunning } = this.props.isRunning;
        return (
            <div className="toolbar-container">
                <div className="algo-container">
                    <div className="algo-button">
                        <DropdownButton id="dropdown" title={algorithm}>
                            <Dropdown.Item value="BubbleSort" onClick={this.handleSort}>BubbleSort</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div className="control-buttons">
                        <button onClick={() => sort((currentArray.length ? currentArray : null), sortSpeed.sortSpeed, algorithm)} disabled={isRunning} style={{ visibility: !isRunning ? 'visible' : 'hidden' }}>Sort</button>
                        {/* <button onClick={this.reset} disabled={isRunning}>RESET!</button> */}
                    </div>
                </div>
                <div className="range-selector">
                    <div className="range">
                        CURRENT ARRAY SIZE = {array.arraySize}
                        <input type="range" min="10" max="100" defaultValue={array.arraySize} id="arraySize" onChange={this.handleChange} disabled={isRunning} />
                    </div>
                    <div className="separator"></div>
                    <div className="range">
                        SORT SPEED = {`${sortSpeed.sortSpeed} MS`}
                        <input type="range" min="10" max="250" defaultValue={sortSpeed.sortSpeed} id="sortSpeed" onChange={this.handleChange} disabled={isRunning} />
                    </div>
                </div>
            </div >
        );
    }
}
export default Toolbar;
