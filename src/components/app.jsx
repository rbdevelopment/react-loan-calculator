import React from 'react';
import Calc from './calc';
import Contact from './contact';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calcData: {}
    };
  }
  onCompletedCalcForm = (data) => {
    this.setState({ calcData: data });
  }
  render() {
    let current;
    if (this.state.calcData.installment > 0) {
      current = <Contact />;
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