import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const DomNode = document.getElementById('techfun');
DomNode ? ReactDOM.render(<App />, DomNode) : false;
