import App from './App';
import configureStore, { history } from './store';

import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './assets/css/bootstrap.min.css';
import './assets/css/paper-kit.css';

const store = configureStore(history)

ReactDOM.render(
    <Provider store={store}>
        <App history={history}/>
    </Provider>
,document.getElementById('root')
);




