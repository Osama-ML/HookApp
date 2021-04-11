import React from "react";
import { AboutScreen } from "./AboutScreen";
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "./Navbar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/about" component={AboutScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
  
};
