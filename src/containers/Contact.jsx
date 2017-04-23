import { connect } from 'react-redux';
import * as actions from '../logic/actions';
import Contact from '../components/Contact';

const mapStateToProps = (state, ownProps) => ({
    incomplete: !(state.firstName && state.lastName && state.phone)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSubmit: () => dispatch(actions.confirm()),
    onFirstNameChanged: (value) => dispatch(actions.updateContactField('firstName', value)),
    onLastNameChanged: (value) => dispatch(actions.updateContactField('lastName', value)),
    onPhoneChanged: (value) => dispatch(actions.updateContactField('phone', value)),
});

const ContactContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact);

export default ContactContainer;