import validateByType from '../src/logic/validate';

describe('validateByType unknown type', () => {
    it('should throw an error if the validation type isn\'t name, phone or amount', () => {
        expect(() => validateByType('test', 'test')).toThrow(new Error("Unknown validation type test"));
    });
});

describe('validateByType type amount', () => {
    it('should return an error if the amount is not provided', () => {
        expect(validateByType('', 'amount')).toEqual('Please provide an amount');
    });
    it('should return an error if the amount is not fully numeric', () => {
        expect(validateByType('1828a', 'amount')).toEqual('Please use digits only');
    });
    it('should return an error if the amount is below 1000', () => {
        expect(validateByType('500', 'amount')).toEqual('The loan amount cannot be smaller than £1000');
    });
    it('should return an error if the amount is above 40000', () => {
        expect(validateByType('40001', 'amount')).toEqual("The loan amount cannot be greater than £40000");
    });
    it('should return empty string if the amount between 1000 and 40000', () => {
        expect(validateByType('2000', 'amount')).toEqual('');
    });
});

describe('validateByType type name', () => {
    it('should return an error if the name is not provided', () => {
        expect(validateByType('', 'name')).toEqual('This field is required to proceed');
    });
    it('should return an error if the name is not fully alphabetic', () => {
        expect(validateByType('Tom1', 'name')).toEqual('Please use letters only');
    });
    it('should return an error if the name is shorter than 3 characters', () => {
        expect(validateByType('To', 'name')).toEqual('Name cannot be shorter than 3 characters');
    });
    it('should return an error if the name is longer than 30 characters', () => {
        expect(validateByType('ThisIsAVeryLongThisIsAVeryLonga', 'name')).toEqual('Name is too long');
    });
    it('should return empty string if the name is between 3 and 30 characters long', () => {
        expect(validateByType('Thomas', 'name')).toEqual('');
    });
});

describe('validateByType type phone', () => {
    it('should return an error if the phone number is not provided', () => {
        expect(validateByType('', 'phone')).toEqual('This field is required to proceed');
    });
    it('should return an error if the phone number is shorter than 7 characters', () => {
        expect(validateByType('075000', 'phone')).toEqual('UK phone numbers are between 7 and 11 characters long');
    });
    it('should return an error if the phone number is longer than 11 characters', () => {
        expect(validateByType('075000000001', 'phone')).toEqual('UK phone numbers are between 7 and 11 characters long');
    });
    it('should return empty string if the phone number is between 7 and 11 characters long', () => {
        expect(validateByType('07500000000', 'phone')).toEqual('');
    });
});

