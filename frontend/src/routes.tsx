import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from './components/notFound/notFound';
import CreateOrphanage from "./pages/createOrphanage/CreateOrphanage";
import Landing from "./pages/landing/Landing";
import Orphanage from "./pages/orphanages/Orphanage";
import OrphanagesMap from "./pages/orphanagesMap/OrphanagesMap";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/map" component={OrphanagesMap} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
