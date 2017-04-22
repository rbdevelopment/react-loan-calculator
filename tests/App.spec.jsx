import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App';

describe('App', () => {
    it('should render a new instance without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });
});