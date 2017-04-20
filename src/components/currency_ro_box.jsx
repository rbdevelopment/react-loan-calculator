import React from 'react';
import PropTypes from 'prop-types';
import ControlLabel from './control_label';
import ContainerBox from './container_box';

class CurrencyReadOnlyBox extends React.Component {
    render() {
        return (
            <ContainerBox>
                <ControlLabel target={this.props.id} desc={this.props.desc} />
                <div className="input-group">
                    <span className="input-group-addon">&pound;</span>
                    <input value={this.props.amount.toFixed(2)} type="text" className="form-control" id={this.props.id} readOnly={true} />
                </div>
            </ContainerBox>
        );
    }
}

CurrencyReadOnlyBox.propTypes = {
    amount: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default CurrencyReadOnlyBox;