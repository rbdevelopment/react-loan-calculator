import React from 'react';
import isAlpha from 'validator/lib/isAlpha';
import isLength from 'validator/lib/isLength';
import isNumeric from 'validator/lib/isNumeric';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ControlLabel from './control_label';
import ContainerBox from './container_box';

class TextBox extends React.Component {
    constructor(props) {
        super(props);

        const css = {};
        if (props.icon) {
            css['glyphicon-' + props.icon] = true;
            css['glyphicon'] = true;
        }
        this.state = {
            iconClass: classnames(css),
            error: ''
        };
    }
    validate(value) {
        let error = '';
        if (!value) {
            error = 'This field is required to proceed';
        }
        else {
            switch (this.props.type) {
                case 'name':
                    if (!isAlpha(value, 'en-GB')) {
                        error = "Please use letters only";
                    }
                    else if (!isLength(value, { min: 3 })) {
                        error = "Name cannot be shorter than 3 characters";
                    }
                    else if (!isLength(value, { max: 30 })) {
                        error = "Name is too long";
                    }
                    break;
                case 'phone':
                    if (!isNumeric(value)) {
                        error = "Please use digits only";
                    } else
                        if (!isLength(value, { min: 7, max: 11 })) {
                            error = "UK phone numbers are between 7 and 11 characters long";
                        }
                    break;
            }
        }
        return error;
    }
    onChange = (e) => {
        let value = e.target.value;
        var error = this.validate(value);
        if (error) {
            this.props.onValueChanged('');
        }
        else {
            this.props.onValueChanged(value);
        }
        this.setState({ error: error });
    }

    render() {
        return (
            <ContainerBox>
                <ControlLabel target={this.props.id} desc={this.props.desc} />
                <div className="input-group">
                    <span className="input-group-addon">
                        <span className={this.state.iconClass} aria-hidden="true" />
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        id={this.props.id}
                        autoComplete="off"
                        onChange={this.onChange} />
                </div>
                <div className="control-validation">{this.state.error}</div>
            </ContainerBox>
        );
    }
}

TextBox.propTypes = {
    desc: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    icon: PropTypes.string,
};

export default TextBox;