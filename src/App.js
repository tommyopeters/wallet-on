import React from "react";
import SideNav from "./components/SideNav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Overview from "./components/Overview";

function App() {
  return (
    <Router>
      <React.Fragment>
        <SideNav />
        <Route path="/" exact component={Overview} />
        <Route path="/overview" component={Overview} />
        <Route path="/activity" component={Overview} />
        <Route path="/balances" component={Overview} />
        <Route path="/debit-cards" component={Overview} />
        <Route path="/history" component={Overview} />
        <Route path="/invite" component={Overview} />
        <Route path="/settings" component={Overview} />
      </React.Fragment>
    </Router>
  );
}

export default App;
