import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from '../components/Login/login.js'
import Report from '../components/report.js'
import Home from '../components/home.js'
import Signup from '../components/signup.js'
import BusinessQuestions from './BusinessQuestions.js'
import Navbar from '../components/Navbar/navbar'
import CreateBusiness from './CreateBusiness/CreateBusiness.js'

import './App.css'

// parses currentUser object from localStorage
// **this is to be used to get currently logged in user**
let activeUser = JSON.parse(localStorage.getItem('currentUser'))

class App extends React.Component {
  constructor() {
    super()
    
    this.state = {
      users: [],
      currentUser: null
    }
  };
  
  componentDidMount(){
    fetch('https://business-builder-backend.herokuapp.com/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {
      this.setState({users: json.data})
    })
  }

  // receives username from login form matches to user object in fetched user array and sets
  // object to currentUser in localStorage as string
  login = (user) => {
    const users = this.state.users
    let result = null
    for(let u of users){
      if (u.attributes.username === user){
        localStorage.setItem('currentUser', JSON.stringify(u))
        this.setState({
          currentUser: u
        })
        result = u;
      }
    }
    return result
  }

  logout = () => {
    localStorage.removeItem('currentUser')
    this.setState({
      currentUser: null
    })
  }

  render(){
    return (
      <Router>
        <div>
          <Navbar currentUser={this.state.currentUser} logoutfn={this.logout}/>
          <Switch>
            <Route exact path='/login' component={ () => <Login login={this.login} users={this.state.users}/>} />
            <Route exact path='/signup' component={ () => <Signup currentUser={activeUser} />} />
            {/* <Route exact path="/home" component={ () => <Home currentUser={activeUser}/>} /> */}
            { localStorage.currentUser? <Route exact path="/home" component={ () => <Home currentUser={activeUser}/>} /> : null}
            { localStorage.currentUser? <Route exact path='/report' component={ () => <Report currentUser={activeUser} />} /> : null}
            { localStorage.currentUser? <Route exact path='/businessquestions' component={ () => <BusinessQuestions currentUser={activeUser} />} />: null}
            { localStorage.currentUser? <Route exact path='/createbusiness' component={() => <CreateBusiness currentUser={activeUser}/>} />: null}
            { localStorage.currentUser? <Redirect to='/home' /> : <Redirect to='/login' />}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
