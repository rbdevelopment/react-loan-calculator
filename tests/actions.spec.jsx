import * as actions from '../src/logic/actions';

describe('updateLoanField action', () => {
    it('updateLoanField should set action type to update loan, name to test and value to testValue', () => {
        expect(actions.updateLoanField('test', 'testValue')).toEqual({
            type: 'update loan',
            name: 'test',
            value: 'testValue'
        });
    });
});

describe('updateContactField action', () => {
    it('updateContactField should set action type to update contact, name to test and value to testValue', () => {
        expect(actions.updateContactField('test', 'testValue')).toEqual({
            type: 'update contact',
            name: 'test',
            value: 'testValue'
        });
    });
});

describe('accept action', () => {
    it('accept should set action type to accept offer', () => {
        expect(actions.accept()).toEqual({
            type: 'accept offer'
        });
    });
});

describe('confirm action', () => {
    it('confirm should set action type to confirm offer', () => {
        expect(actions.confirm()).toEqual({
            type: 'confirm offer'
        });
    });
});

