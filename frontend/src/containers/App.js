import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from '../components/login.js'
import Report from '../components/report.js'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/report' component={Report} />
          <Redirect to='/login' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
