import HomePage from "./pages/Home/HomePage";
import ProductPage from "./pages/Product/ProductPage";
import CartPage from "./pages/Cart/CartPage";
import CarsPage from "./pages/Cars/CarsPage";

import {Route, Switch} from "react-router";

import './App.css';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/cart" component={CartPage}/>
            <Route path="/cars/:id" component={ProductPage}/>
            <Route path="/cars" component={CarsPage} />
        </Switch>
)
}
export default App;