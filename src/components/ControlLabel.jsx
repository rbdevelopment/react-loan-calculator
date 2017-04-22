import React from 'react';
import PropTypes from 'prop-types';
class ControlLabel extends React.Component {
    render() {
        return (
            <label htmlFor={this.props.target}>{this.props.desc}</label>
        );
    }
}

ControlLabel.propTypes = {
    desc: PropTypes.string.isRequired,
    target: PropTypes.string
};

export default ControlLabel;