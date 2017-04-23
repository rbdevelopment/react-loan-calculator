import React from 'react';
import PropTypes from 'prop-types';
import Calc from '../containers/Calc';
import Contact from '../containers/Contact';

const App = ({ accepted, confirmed }) => {
  if (accepted && confirmed) {
    return <h3>Thank you! We'll be in touch soon.</h3>
  }
  if (accepted) {
    return <Contact />;
  }
  return <Calc />;
}

App.propTypes = {
  accepted: PropTypes.bool.isRequired,
  confirmed: PropTypes.bool.isRequired
};

export default App;