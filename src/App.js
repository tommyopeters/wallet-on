import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SideNav from './components/SideNav';
import Overview from './components/Overview';


function App() {
  return (
    <Router>
      <React.Fragment>
        <SideNav />
        <Route path="/" exact component={Overview} />
        <Route path="/activity" component={Overview} />
        <Route path="/balances" component={Overview} />
        <Route path="/debit-cards" component={Overview} />
        <Route path="/history" component={Overview} />
        <Route path="/recipients" component={Overview} />
        <Route path="/invite" component={Overview} />
        <Route path="/settings" component={Overview} />
        <Route path="/help" component={Overview} />
      </React.Fragment>
    </Router>
  );
}

export default App;
