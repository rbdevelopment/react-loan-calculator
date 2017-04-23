import React from 'react';
import PropTypes from 'prop-types';
import ContainerBox from './ContainerBox';
import ControlLabel from './ControlLabel';
import ButtonGroup from './ButtonGroup';
import AmountBox from './AmountBox';
import AmountReadOnly from '../containers/AmountReadOnly';

const Calc = ({ incomplete, onPurposeChanged, onAmountChanged, onMonthsChanged, onSubmit }) => {
    return (
        <section>
            <ButtonGroup
                desc="What would you like the loan for?"
                items={['Car', 'Motorbike', 'Holiday', 'Home cinema']}
                onItemChanged={onPurposeChanged} />
            <AmountBox
                id="amount"
                desc="How much would you like to borrow?"
                onAmountChanged={onAmountChanged} />
            <ButtonGroup
                desc="Over how many months?"
                items={[12, 24, 36, 48, 60]}
                onItemChanged={onMonthsChanged} />
            <AmountReadOnly
                id="installment"
                desc="Your monthly installment with us would be" />
            <ContainerBox>
                <button disabled={incomplete}
                    className='btn btn-success'
                    onClick={onSubmit}>
                    I'm happy with the offer</button>
            </ContainerBox>
        </section>
    );
};

Calc.propTypes = {
    incomplete: PropTypes.bool.isRequired,
    onPurposeChanged: PropTypes.func.isRequired,
    onAmountChanged: PropTypes.func.isRequired,
    onMonthsChanged: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default Calc;