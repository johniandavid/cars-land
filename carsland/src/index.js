import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/bootstrap.min.css';
import './assets/css/paper-kit.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
  document.getElementById('root')
);
