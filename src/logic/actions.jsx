import * as constants from './constants';
export const updateLoanField = (name, value) => ({
  type: constants.UPDATE_LOAN_FIELD,
  name,
  value
});

export const updateContactField = (name, value) => ({
  type: constants.UPDATE_CONTACT_FIELD,
  name,
  value
});

export const accept = () => ({
  type: constants.ACCEPT_OFFER
});

export const confirm = () => ({
  type: constants.CONFIRM_OFFER
});