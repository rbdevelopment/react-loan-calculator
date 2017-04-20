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

  render() {
    let current;
    if (this.state.calcData.installment > 0) {
      current = <Contact onCompletedForm={this.onCompletedCalcForm} />;
    }
    else {
      current = <Calc onCompletedForm={this.onCompletedContactForm} />;
    }

    return (
      <section>
        {current}
      </section>
    )
  }
}