import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormField from "../components/FormField";
import ListProduct from "../components/ListProduct";
import ProductCard from "../components/ProductCard";
import ShoppingCart from "../components/ShoppingCart";
import Home from "../screen/Home";

export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route>
          <div>Página não encontrada</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
