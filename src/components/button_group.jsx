import React from 'react';
import classnames from 'classnames';
import ControlLabel from './control_label';
import ContainerBox from './container_box';
import PropTypes from 'prop-types';

class ButtonGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.prepareData(props.items, null)
        };
    }
    prepareData(items, selectedIndex) {
        return items.map((item, index) => {
            const css = classnames(
                {
                    'btn': true,
                    'btn-default': selectedIndex != index,
                    'btn-primary': selectedIndex == index
                });
            return { key: index, value: item, className: css };
        });
    }
    select(item) {
        return () => {
            this.setState({
                data: this.prepareData(this.props.items, item.key)
            });
            this.props.onItemChanged(item.value);
        }
    }
    render() {
        return (
            <ContainerBox>
                <ControlLabel desc={this.props.desc} /><br />
                <div className="btn-group">
                    {this.state.data.map((item) => {
                        return <button
                            key={item.key}
                            className={item.className}
                            onClick={this.select(item)}>
                            {item.value}
                        </button>;
                    })}
                </div>
            </ContainerBox>
        );
    }
}

ButtonGroup.propTypes = {
    desc: PropTypes.string.isRequired,
    items: PropTypes.array
};

export default ButtonGroup;
