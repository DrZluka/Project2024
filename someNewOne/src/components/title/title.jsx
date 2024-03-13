import React, { Component } from 'react';
import { connect } from 'react-redux';

class Title extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.someTitle}</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        someTitle: state.title
    }
}

export default connect(mapStateToProps)(Title);