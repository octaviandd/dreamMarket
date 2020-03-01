/** @format */

import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import ArrivePage from "./pages/ArrivePage";
import DreamsPage from "./pages/DreamsPage";
import StoriesPage from "./pages/StoriesPage";
import SymbolsPage from "./pages/SymbolsPage";
import DreamPage from "./pages/DreamPage";
import ErrorPage from "./pages/ErrorPage.js";
import store from "./store";
import { Provider } from "react-redux";
import SymbolPage from "./pages/SymbolPage";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ArrivePage}></Route>
        <Route exact path="/dreams" component={DreamsPage}></Route>
        <Route exact path="/stories" component={StoriesPage}></Route>
        <Route exact path="/symbols" component={SymbolsPage}></Route>
        <Route exact path="/symbols/:slug" component={SymbolPage}></Route>
        <Route exact path="/dreams/:slug" component={DreamPage}></Route>
        <Route exact path="/error" component={ErrorPage}></Route>
      </Switch>
    </Provider>
  );
}

export default App;
