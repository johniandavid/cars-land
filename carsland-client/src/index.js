import App from './App';
import configureStore , { history } from "./store"
import {loadState, saveState} from "./stateLoader";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter} from 'connected-react-router';

import './assets/css/bootstrap.min.css';
import './assets/css/paper-kit.css';


const redux = configureStore(loadState())


redux.subscribe(() => {
    saveState(redux.getState());
});

ReactDOM.render(
  <Provider store={redux}>
    <ConnectedRouter history={history}>
        <>
          <App />
        </>
    </ConnectedRouter>
  </Provider>,
document.getElementById('root')
)

