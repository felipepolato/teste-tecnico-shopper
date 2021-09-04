import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
