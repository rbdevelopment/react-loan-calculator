import React from 'react';
import PropTypes from 'prop-types';
import ContainerBox from './ContainerBox';
import TextBox from './TextBox';

const Contact = ({ incomplete, onFirstNameChanged, onLastNameChanged, onPhoneChanged, onSubmit }) => {
    return (
        <section>
            <TextBox onValueChanged={onFirstNameChanged}
                type="name"
                icon="user"
                id="firstName"
                desc="What is your first name?" />
            <TextBox onValueChanged={onLastNameChanged}
                type="name"
                icon="user"
                id="lastName"
                desc="What is your last name?" />
            <TextBox onValueChanged={onPhoneChanged}
                type="phone"
                icon="phone"
                id="phone"
                desc="What is your phone number?" />

            <ContainerBox>
                <button disabled={incomplete}
                    className='btn btn-success' onClick={onSubmit}>
                    Submit loan request</button>
            </ContainerBox>
        </section>
    );
};

Contact.propTypes = {
    incomplete: PropTypes.bool.isRequired,
    onFirstNameChanged: PropTypes.func.isRequired,
    onLastNameChanged: PropTypes.func.isRequired,
    onPhoneChanged: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default Contact;