import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import LeaderBoard from "../components/LeaderBoard";
import SubmitFlag from "../components/SubmitFlag";
import Home from "../components/Home.jsx";
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Switch>
            <Route path="/Leaderboard" component={LeaderBoard} />
            <Route path="/submitflag" component={SubmitFlag} />
            <Route component={Home} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
