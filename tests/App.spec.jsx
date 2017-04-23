import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/components/App';

describe('App', () => {
    it('should render the thank you message if the offer is accepted and the contact details are confirmed', () => {
        const div = document.createElement('div');
        var html = ReactDOMServer.renderToString(<App accepted={true} confirmed={true} />);
        expect(html).toEqual("<h3 data-reactroot=\"\" data-reactid=\"1\" data-react-checksum=\"2053249765\">Thank you! We&#x27;ll be in touch soon.</h3>");
    });
});