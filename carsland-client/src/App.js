import HomePage from "./pages/Home/HomePage";
import ProductPage from "./pages/Product/ProductPage";
import CartPage from "./pages/Cart/CartPage";

import { Switch, Route } from "react-router-dom";


import './App.css';

function App() {

  return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/cars/:id" component={ProductPage}/>
            <Route path="/cart" component={CartPage} />
        </Switch>
  )
}

export default App;
