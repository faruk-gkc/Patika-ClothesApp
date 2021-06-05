// import CategoryList from "./components/category/CategoryList";
import React from "react";
import ProductList from "./components/product/ProductList";
import BasketList from "./components/basket/BasketList";
import Header from './components/Navbar/Navbar'
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'alertifyjs/build/css/alertify.min.css'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route exact path="/cart">
            <BasketList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
