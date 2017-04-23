
import isAlpha from 'validator/lib/isAlpha';
import isLength from 'validator/lib/isLength';
import isNumeric from 'validator/lib/isNumeric';
const validateAmount = (value, minValue = 1000, maxValue = 40000) => {
    if (!value) {
        return "Please provide an amount";
    }
    if (!isNumeric(value)) {
        return "Please use digits only";
    }
    const amount = Number.parseInt(value);
    if (amount < minValue) {
        return "The loan amount cannot be smaller than \u00A3" + minValue;
    }
    if (amount > maxValue) {
        return "The loan amount cannot be greater than \u00A3" + maxValue;
    }

    return '';
}
const validateName = (value) => {
    if (!value) {
        return 'This field is required to proceed';
    }
    else if (!isAlpha(value, 'en-GB')) {
        return "Please use letters only";
    }
    else if (!isLength(value, { min: 3 })) {
        return "Name cannot be shorter than 3 characters";
    }
    else if (!isLength(value, { max: 30 })) {
        return "Name is too long";
    }
    return '';
}
const validatePhone = (value) => {
    if (!value) {
        return 'This field is required to proceed';
    }
    else if (!isNumeric(value)) {
        return "Please use digits only";
    } else
        if (!isLength(value, { min: 7, max: 11 })) {
            return "UK phone numbers are between 7 and 11 characters long";
        }
    return '';
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
            throw new Error('Unknown validation type ' + type);
    }
}

export default validateByType;