import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

const DomNode = document.getElementById('techfun');
DomNode
    ? ReactDOM.render(
          <BrowserRouter>
              <App />
          </BrowserRouter>,
          DomNode
      )
    : false;
