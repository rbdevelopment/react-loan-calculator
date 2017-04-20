import React from 'react';
import ReactDOM from 'react-dom';
import Calc from './components/calc';

class App extends React.Component {
  
  render() {
    return (
      <Calc />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
