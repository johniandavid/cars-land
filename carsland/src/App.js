import Home from "./pages/Home/Home";
import ProductPage from "./pages/Product/product";

import { Switch, Route } from "react-router-dom";

import './App.css';

function App() {

  return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/cars/:id" component={ProductPage}/>
      </Switch>
  )
}

export default App;
