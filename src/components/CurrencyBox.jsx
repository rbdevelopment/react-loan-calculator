import React from 'react';
import PropTypes from 'prop-types';
import ControlLabel from './ControlLabel';
import ContainerBox from './ContainerBox';
import validateByType from '../logic/validate';

class CurrencyBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            error: ''
        };
    }
    
    onChange = (e) => {
        const value = Number.parseInt(e.target.value);
        const error = validateByType(value, "amount");
        this.setState({ error: error });
        this.props.onAmountChanged(value);
    }
    render() {
        return (
            <ContainerBox>
                <ControlLabel target={this.props.id} desc={this.props.desc} />
                <div className="input-group">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-gbp" aria-hidden="true"></span>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        id={this.props.id}
                        autoComplete="off"
                        onChange={this.onChange} />
                    <span className="input-group-addon">.00</span>
                </div>
                <div className="control-validation">{this.state.error}</div>
            </ContainerBox>
        );
    }
}

CurrencyBox.propTypes = {
    desc: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    minValue: PropTypes.number,
    maxValue: PropTypes.number
};

export default CurrencyBox;