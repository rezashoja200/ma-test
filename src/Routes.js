import { Switch, Route } from "react-router-dom";

import Home from "screens/Home";

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
);

export default Routes;
