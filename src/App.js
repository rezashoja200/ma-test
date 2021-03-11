import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "store/reducer";
import Routes from "Routes";

const App = () => (
  <Router>
    <Provider store={createStore(reducer)}>
      <Routes />
    </Provider>
  </Router>
);

export default App;
