import React from 'react';
import Calc from './calc';
import Contact from './contact';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calcData: {},
      contactData: {}
    };
  }
  onCompletedCalcForm = (data) => this.setState({ calcData: data });
  onCompletedContactForm = (data) => this.setState({ contactData: data });
  isCalcDone = () => this.state.calcData.installment > 0;
  isContactDone = () => this.state.contactData.phone;
  render() {
    let current;
    if (this.isContactDone()) {
      return <h3>Thank you! We'll be in touch soon.</h3>
    }
    if (this.isCalcDone()) {
      return <Contact onCompletedForm={this.onCompletedContactForm} />;
    }
    return <Calc onCompletedForm={this.onCompletedCalcForm} />;
  }
}
