import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Main from "./components/Main";

const FourOFour = () => <h1> Eror 404, Not found... </h1>;

const App = () => (
  <Provider store={store}>
    <Switch>
      <Route exatc path="/" component={Main} />
      <Route component={FourOFour} />
    </Switch>
  </Provider>
);

export default App;
