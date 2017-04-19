import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
    render() { return (<p>Hello, world!</p>) }
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);
