import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormField from "../components/FormField";
import ListProduct from "../components/ListProduct";
import ProductCard from "../components/ProductCard";
import ShoppingCart from "../components/ShoppingCart";

export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <FormField />
        </Route>
        <Route exact path={"/listproduct"}>
          <ListProduct />
        </Route>
        <Route exact path={"/productcard"}>
          <ProductCard />
        </Route>
        <Route exact path={"/shoppingcart"}>
          <ShoppingCart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
