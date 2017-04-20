import React from 'react';
import Calculator from '../logic/calculator';
import ContainerBox from './container_box';
import ControlLabel from './control_label';
import ButtonGroup from './button_group';
import CurrencyBox from './currency_box';
import CurrencyReadOnlyBox from './currency_ro_box';

export default class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            months: 0,
            purpose: '',
            installment: 0
        }
        this.loanCalc = new Calculator();
    }
    onPurposeChanged = (value) => {
        this.setState({ purpose: value });
    }
    onMonthsChanged = (value) => {
        const months = Number.parseInt(value);
        this.setState({ months: months });

        const amount = this.state.amount;
        this.recalculateInstallment(amount, months);
    }
    onAmountChanged = (value) => {
        const amount = Number.parseInt(value);
        this.setState({ amount: amount });

        const months = this.state.months;
        this.recalculateInstallment(amount, months);
    }
    recalculateInstallment = (amount, months) => {
        let installment = 0;
        if (months > 0 && amount > 0) {
            installment = this.loanCalc.calculateInstallment(
                amount,
                months);
        }
        this.setState({ installment: installment });
    }
    isFormIncomplete = () => {
        return !(
            this.state.amount &&
            this.state.months &&
            this.state.purpose &&
            this.state.installment);
    }
    render() {
        return (
            <section>
                <ButtonGroup
                    desc="What would you like the loan for?"
                    items={['Car', 'Motorbike', 'Holiday', 'Home cinema']}
                    onItemChanged={this.onPurposeChanged} />
                <CurrencyBox
                    id="amount"
                    desc="How much would you like to borrow?"
                    onAmountChanged={this.onAmountChanged} />
                <ButtonGroup
                    desc="Over how many months?"
                    items={[12, 24, 36, 48, 60]}
                    onItemChanged={this.onMonthsChanged} />
                <CurrencyReadOnlyBox
                    id="installment"
                    desc="Your monthly installment with us would be"
                    amount={this.state.installment} />
                <ContainerBox>
                    <button disabled={this.isFormIncomplete()}
                        className='btn btn-success'>
                        I'm happy with the offer</button>
                </ContainerBox>
            </section>
        );
    }
}