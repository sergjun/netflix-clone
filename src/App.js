import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Header, MenuBar } from "./components";
import { Home, MyList, Series, Films} from "./Pages";
import "./GlobalStyle.scss";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/minha-lista">
          <MyList />
        </Route>
        <Route path="/series">
          <Series/>
        </Route>
        <Route path="/filmes">
          <Films/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Redirect to="/" />
      </Switch>
      <MenuBar />
    </Router>
  );
}
