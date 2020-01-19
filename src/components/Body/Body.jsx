import React, { Component } from 'react';
import { connect } from "react-redux";
import "./Body.css";

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount = () => {
        console.log(this.props)

    }
    render() {
        const { arrayOfNumbers } = this.props.array
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

const mapStateToProps = ({ array, swappers }) => ({
    array, swappers
})
export default connect(mapStateToProps)(Body);