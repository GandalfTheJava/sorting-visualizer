import React, { Component } from 'react';
import "./Body.css";

class Body extends Component {
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.render();
        }
    }
    render() {
        const {
            array,
            currentSorted,
            currentBubbleTwo
        } = this.props;
        return (
            <div className="bar-containers">
                {
                    array.arrayOfNumbers ? (array.arrayOfNumbers.map((element, index) => {
                        console.log("Array " + array.arrayOfNumbers.length)
                        const barColor =  //IF SWAPPING
                            currentBubbleTwo.includes(index) ? 'red' : //IF CURRENT BUBBLE TWO IS COMPARING
                                currentSorted.includes(index) ? 'purple' : '#bbe1fa'
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