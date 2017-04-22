import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ControlLabel from './ControlLabel';
import ContainerBox from './ContainerBox';
import validateByType from '../logic/validate';

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

    onChange = (e) => {
        let value = e.target.value;
        var error = validateByType(value, this.props.type);
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