import React from 'react';
import PropTypes from 'prop-types';
const ControlLabel = ({ target, desc }) =>
    <label htmlFor={target}>{desc}</label>;

ControlLabel.propTypes = {
    desc: PropTypes.string.isRequired,
    target: PropTypes.string
};

export default ControlLabel;