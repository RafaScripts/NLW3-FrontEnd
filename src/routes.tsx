import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from './screens/landing';
import ophaMap from './screens/ophamap';

function routes() {
    return(
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/map" component={ophaMap} />
          </Switch> 
        </BrowserRouter>
    );
}

export default routes;