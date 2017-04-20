import React from 'react';

export default class ControlLabel extends React.Component {
    render() {
        return (
            <label htmlFor={this.props.target}>{this.props.desc}</label>
        );
    }
}