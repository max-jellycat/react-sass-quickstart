import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Other from './components/Other';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/other" component={Other} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default App;

