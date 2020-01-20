import React, { Component } from 'react';
import "./Body.css";

class Body extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {
            array,
            swapper,
            currentSorted,
            currentBubbleTwo
        } = this.props;
        return (
            <div className="bar-containers">
                {
                    array.arrayOfNumbers ? (array.arrayOfNumbers.map((element, index) => {
                        const barColor = swapper.includes(index) ? 'blue' : //IF SWAPPING
                            currentBubbleTwo.includes(index) ? 'green' : //IF CURRENT BUBBLE TWO IS COMPARING
                                currentSorted.includes(index) ? 'purple' : 'red' //IF SORTED PURPLE ELSE RED
                        return (
                            <div
                                className="bar"
                                key={index}
                                style={{ height: `${element}px`, backgroundColor: barColor }}>
                            </div>
                        )
                    })) : (null)
                }
            </div>
        );
    }
}
export default Body;