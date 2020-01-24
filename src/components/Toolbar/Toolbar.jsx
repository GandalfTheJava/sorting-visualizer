import React, { Component } from 'react';
import { Dropdown, DropdownButton } from "react-bootstrap";
import "./Toolbar.css";

class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSort = this.handleSort.bind(this);
    }
    componentDidMount = () => {
        this.generateNewArray();
    }
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.render();
        }
    }
    generateNewArray = () => {
        let { changeArrayNumbers, setCurrentSorted } = this.props;
        setCurrentSorted([]);
        const { arraySize } = this.props.array;
        let newArray = []
        for (let i = 0; i < arraySize; i++) {
            let randomNumber = Math.floor(Math.random() * 650) + 1;
            let anotherNumber = true
            if (!newArray.includes(randomNumber)) {
                newArray.push(randomNumber);
            }
            else {
                while (anotherNumber) {
                    randomNumber = Math.floor(Math.random() * 650) + 1;
                    if (!newArray.includes(randomNumber)) {
                        newArray.push(randomNumber);
                        anotherNumber = false;
                    }
                }
            }
        }
        changeArrayNumbers(newArray);
    }
    handleChange = (e) => {
        let c = e.target.id.toString();
        if (c === "arraySize") {
            let { changeArraySize } = this.props;
            changeArraySize(e.target.value);
            setTimeout(() => {
                this.generateNewArray();
            }, 5)

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
                        <button onClick={this.generateNewArray} disabled={isRunning}>GENERATE NEW ARRAY</button>
                    </div>
                </div>
                <div className="range-selector">
                    <div className="range">
                        CURRENT ARRAY SIZE = {array.arraySize}
                        <input type="range" min="10" max="50" defaultValue={array.arraySize} id="arraySize" onChange={this.handleChange} disabled={isRunning} style={{ color: isRunning ? 'red' : null }} />
                    </div>
                    <div className="separator"></div>
                    <div className="range">
                        SORT SPEED = {`${sortSpeed.sortSpeed} MS`}
                        <input type="range" min="5" max="150" defaultValue={sortSpeed.sortSpeed} id="sortSpeed" onChange={this.handleChange} disabled={isRunning} style={{ color: isRunning ? 'red' : null }} />
                    </div>
                </div>
            </div >
        );
    }
}
export default Toolbar;
