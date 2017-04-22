
import isAlpha from 'validator/lib/isAlpha';
import isLength from 'validator/lib/isLength';
import isNumeric from 'validator/lib/isNumeric';
const validateAmount = (value, minValue = 1000, maxValue = 40000) => {
    if (!isNumeric(value)) {
        return "Please use digits only";
    }

    const amount = Number.parseInt(value);
    if (isNaN(amount)) {
        return "Please provide a valid amount";
    }
    else
        if (amount < minValue) {
            return "The loan amount cannot be smaller than \u00A3" + minValue;
        }
        else
            if (amount > maxValue) {
                return "The loan amount cannot be greater than \u00A3" + maxValue;
            }
    return '';
}
const validateName = (value) => {
    let error = '';
    if (!value) {
        error = 'This field is required to proceed';
    }
    else if (!isAlpha(value, 'en-GB')) {
        error = "Please use letters only";
    }
    else if (!isLength(value, { min: 3 })) {
        error = "Name cannot be shorter than 3 characters";
    }
    else if (!isLength(value, { max: 30 })) {
        error = "Name is too long";
    }
    return error;
}
const validatePhone = (value) => {
    let error = '';
    if (!value) {
        error = 'This field is required to proceed';
    }
    else if (!isNumeric(value)) {
        error = "Please use digits only";
    } else
        if (!isLength(value, { min: 7, max: 11 })) {
            error = "UK phone numbers are between 7 and 11 characters long";
        }
    return error;
}
const validateByType = (value, type) => {
    switch (type) {
        case 'name':
            return validateName(value);
        case 'phone':
            return validatePhone(value);
        case 'amount':
            return validateAmount(value);
        default:
            throw new Error('Unknown validation type');
    }
}

export default validateByType;