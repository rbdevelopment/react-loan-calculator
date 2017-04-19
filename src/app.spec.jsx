import React from 'react';
import ReactDOM from 'react-dom';
import CalcApp from './calc';

describe('CalcApp', () => {
    it('should render a new instance', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CalcApp />, div);
    });
});
