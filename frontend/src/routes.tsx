import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateOrphanage from "./pages/createOrphanage/CreateOrphanage";
import Landing from "./pages/landing";
import Orphanage from "./pages/orphanages/Orphanage";
import OrphanagesMap from "./pages/orphanagesMap";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}
