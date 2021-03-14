import App from './App';

import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import './assets/css/bootstrap.min.css';
import './assets/css/paper-kit.css';



ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
  document.getElementById('root')
);
