import * as constants from './constants';
import calculateInstallment from '../logic/calculateInstallment';

const initialState = {
    amount: 0,
    months: 0,
    purpose: '',
    installment: 0,
    firstName: '',
    lastName: '',
    phone: '',
    accepted: false,
    confirmed: false
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.UPDATE_LOAN_FIELD:
        case constants.UPDATE_CONTACT_FIELD:
            let newState = Object.assign({}, state);
            newState[action.name] = action.value;
            //Recalculate monthly installment if updating loan fields
            if (action.type === constants.UPDATE_LOAN_FIELD) {
                let installment = 0;
                if (newState.months > 0 && newState.amount > 0) {
                    installment = calculateInstallment(newState.amount, newState.months);
                }
                newState.installment = installment;
            }
            return newState;
        case constants.ACCEPT_OFFER:
            return { ...state, accepted: true };
        case constants.CONFIRM_OFFER:
            return { ...state, confirmed: true };
    }

    return state;
};

export default reducer;