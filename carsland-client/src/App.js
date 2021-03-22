import HomePage from "./pages/Home/HomePage";
import ProductPage from "./pages/Product/ProductPage";
import CartPage from "./pages/Cart/CartPage";

import {Route, Switch} from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'

import './App.css';


function App({history}) {

    return (
      <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/cars/:id" component={ProductPage} />
            <Route path="/cart" component={CartPage} />
        </Switch>
      </ConnectedRouter>
    )
}

export default App;
