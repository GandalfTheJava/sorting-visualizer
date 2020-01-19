import React, { Component } from 'react';
import { connect } from "react-redux";
import "./Body.css";

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount = () => {

    }
    render() {
        const { arrayOfNumbers } = this.props.array
        return (
            <div>
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

const mapStateToProps = ({ array }) => ({
    array
})
export default connect(mapStateToProps)(Body);