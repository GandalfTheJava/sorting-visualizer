import React, { Component } from 'react';
import "./Body.css";

class Body extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount = () => {

    }
    render() {
        const { arrayOfNumbers } = this.props.array;
        return (
            <div className="bar-containers">
                {
                    arrayOfNumbers ? (arrayOfNumbers.map((element, index) => {
                        return (
                            <div key={index} className="bar" style={{ height: `${element}px` }}>
                            </div>
                        )
                    })) : (null)
                }
            </div>
        );
    }
}
export default Body;