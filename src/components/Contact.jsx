import React from 'react';
import ContainerBox from './ContainerBox';
import TextBox from './TextBox';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phone: ''
        };
    }
    isFormIncomplete = () => !(
        this.state.firstName &&
        this.state.lastName &&
        this.state.phone);

    onSubmit = () => this.props.onCompletedForm(this.state);
    onFirstNameChanged = (value) => this.setState({ firstName: value });
    onLastNameChanged = (value) => this.setState({ lastName: value });
    onPhoneChanged = (value) => this.setState({ phone: value });
    render() {
        return (
            <section>
                <TextBox onValueChanged={this.onFirstNameChanged}
                    type="name"
                    icon="user"
                    id="firstName"
                    desc="What is your first name?" />
                <TextBox onValueChanged={this.onLastNameChanged}
                    type="name"
                    icon="user"
                    id="lastName"
                    desc="What is your last name?" />
                <TextBox onValueChanged={this.onPhoneChanged}
                    type="phone"
                    icon="phone"
                    id="phone"
                    desc="What is your phone number?" />

                <ContainerBox>
                    <button disabled={this.isFormIncomplete()}
                        className='btn btn-success' onClick={this.onSubmit}>
                        Submit loan request</button>
                </ContainerBox>
            </section>
        );
    }
}