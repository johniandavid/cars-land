import App from './App';

import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {createStore} from "redux";
import rootReducer from "./reducers";

import './assets/css/bootstrap.min.css';
import './assets/css/paper-kit.css';
import {Provider} from "react-redux";


const redux = createStore (
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <BrowserRouter>
        <Provider store={redux}>
            <App />
        </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);
