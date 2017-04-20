import React from 'react';
import ReactDOM from 'react-dom';
import CalcApp from '../src/components/calc';

describe('CalcApp', () => {
    it('should render a new instance without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CalcApp />, div);
    });
});
