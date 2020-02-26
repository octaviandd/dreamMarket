/** @format */

import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import ArrivePage from "./pages/ArrivePage";
import DreamsPage from "./pages/DreamsPage";
import StoriesPage from "./pages/StoriesPage";
import SymbolsPage from "./pages/SymbolsPage";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  console.log("hello");
  return (
    <Provider store={store}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ArrivePage}></Route>
        <Route exact path="/dreams" component={DreamsPage}></Route>
        <Route exact path="/stories" component={StoriesPage}></Route>
        <Route exact path="/symbols" component={SymbolsPage}></Route>
      </Switch>
    </Provider>
  );
}

export default App;
