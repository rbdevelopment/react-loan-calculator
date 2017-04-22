import React from 'react';
import PropTypes from 'prop-types';
import ControlLabel from './ControlLabel';
import ContainerBox from './ContainerBox';

const CurrencyReadOnlyBox = ({ id, desc, amount }) => (
    <ContainerBox>
        <ControlLabel target={id} desc={desc} />
        <div className="input-group">
            <span className="input-group-addon">
                <span className="glyphicon glyphicon-gbp" aria-hidden="true"></span>
            </span>
            <input value={amount.toFixed(2)} type="text"
                className="form-control" id={id} readOnly={true} />
        </div>
    </ContainerBox>
);

CurrencyReadOnlyBox.propTypes = {
    amount: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default CurrencyReadOnlyBox;