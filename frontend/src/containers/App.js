import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from '../components/login.js'
import Report from '../components/report.js'
import BusinessQuestions from './BusinessQuestions.js'
import Navbar from '../components/navbar'
import CreateBusiness from './CreateBusiness.js'
import Home from '../components/home.js'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/report' component={Report} />
          <Route exact path='/businessquestions' component={BusinessQuestions} />
          <Route exact path='/createbusiness' component={CreateBusiness} />
          <Route exact path='/home' component={Home} />
          <Redirect to='/login' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
