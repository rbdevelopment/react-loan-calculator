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
  onCompletedCalcForm = (data) => {
    this.setState({ calcData: data });
  }

  onCompletedContactForm = (data) => {
    this.setState({ contactData: data });
  }
  isCalcDone = () => {
    return this.state.calcData.installment > 0;
  }
  isContactDone = () => {
    return this.state.contactData.phone;
  }
  render() {
    let current;
    if (this.isContactDone()) {
      current = <h3>Thank you! We'll be in touch soon.</h3>
    }
    else
      if (this.isCalcDone()) {
        current = <Contact onCompletedForm={this.onCompletedContactForm} />;
      }
      else {
        current = <Calc onCompletedForm={this.onCompletedCalcForm} />;
      }

    return (
      <section>
        {current}
      </section>
    )
  }
}