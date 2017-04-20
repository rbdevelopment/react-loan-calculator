import React from 'react';
import ReactDOM from 'react-dom';
import CalcApp from './calc';

class App extends React.Component {
  render() {
    return (
      <CalcApp />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
