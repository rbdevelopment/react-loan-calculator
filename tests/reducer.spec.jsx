import * as constants from '../src/logic/constants';
import reducer from '../src/logic/reducer';

describe('reducer', () => {
    it('should set field to the given loan value and installment to 0 by default' , () => {
        var result = reducer({ field: 0 }, {
            type: constants.UPDATE_LOAN_FIELD, name: "field", value: 10
        });
        expect(result).toEqual({ field: 10, installment: 0 });
    });
    it('should calculate installment if months and amount are above 0', () => {
        var result = reducer({ months: 12, amount: 100 }, {
            type: constants.UPDATE_LOAN_FIELD, name: "field", value: 1
        });
        expect(result).toEqual({ months: 12, field: 1, amount: 100, installment: 8.56 });
    });
    it('should set installment to 0 if months are set to 0', () => {
        var result = reducer({ months: 12, amount: 100, installment: 150 }, {
            type: constants.UPDATE_LOAN_FIELD, name: "months", value: 0
        });
        expect(result).toEqual({ months: 0, amount: 100, installment: 0 });
    });
    it('should set installment to 0 if amount is set to 0', () => {
        var result = reducer({ months: 12, amount: 100, installment: 99 }, {
            type: constants.UPDATE_LOAN_FIELD, name: "amount", value: 0
        });
        expect(result).toEqual({ months: 12, amount: 0, installment: 0 });
    });
    it('should set installment to 0 if amount is already set to 0', () => {
        var result = reducer({ months: 12, amount: 0, installment: 130 }, {
            type: constants.UPDATE_LOAN_FIELD, name: "field", value: 'tom'
        });
        expect(result).toEqual({ months: 12, field: "tom", amount: 0, installment: 0 });
    });
    it('should set installment to 0 if months are already set to 0', () => {
        var result = reducer({ months: 0, amount: 250, installment: 200 }, {
            type: constants.UPDATE_LOAN_FIELD, name: "field", value: 'tom'
        });
        expect(result).toEqual({ months: 0, field: "tom", amount: 250, installment: 0 });
    });
    it('should set field to the given contact value', () => {
        var result = reducer({ field: 0 }, {
            type: constants.UPDATE_CONTACT_FIELD, name: "field", value: 'tom'
        });
        expect(result).toEqual({ field: 'tom' });
    });
    it('should set accepted to true', () => {
        var result = reducer({}, {
            type: constants.ACCEPT_OFFER
        });
        expect(result).toEqual({ accepted: true });
    });
    it('should set confirmed to true', () => {
        var result = reducer({}, {
            type: constants.CONFIRM_OFFER
        });
        expect(result).toEqual({ confirmed: true });
    });
});
