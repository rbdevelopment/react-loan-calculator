import React from 'react';
import PropTypes from 'prop-types';
import ControlLabel from './control_label';
import ContainerBox from './container_box';

class CurrencyBox extends React.Component {
    onChange = (e) =>
    {
        this.props.onAmountChanged(e.target.value);
    }
    render() {
        return (
            <ContainerBox>
                <ControlLabel target={this.props.id} desc={this.props.desc} />
                <div className="input-group">
                    <span className="input-group-addon">&pound;</span>
                    <input
                        type="text"
                        className="form-control"
                        id={this.props.id}
                        autoComplete="off"
                        value={this.props.amount}
                        onChange={this.onChange} />
                    <span className="input-group-addon">.00</span>
                </div>
                <div className="control-validation">please provide the amount</div>
            </ContainerBox>
        );
    }
}

CurrencyBox.propTypes = {
    desc: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default CurrencyBox;