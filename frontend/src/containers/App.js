import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from '../components/login.js'
import Report from '../components/report.js'
import Home from '../components/home.js'
import Signup from '../components/signup.js'
import BusinessQuestions from './BusinessQuestions.js'
import Navbar from '../components/navbar'
import CreateBusiness from './CreateBusiness.js'

// parses currentUser object from localStorage
// **this is to be used to get currently logged in user**
const activeUser = JSON.parse(localStorage.getItem('currentUser'))

class App extends React.Component {
  constructor() {
    super()
    
    this.state = {
    }
  };
  
  componentDidMount(){
    fetch('http://localhost:3000/users', {
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
    let u
    for(u of users){
      if (u.attributes.username === user){
        localStorage.setItem('currentUser', JSON.stringify(u))
      }
    }
  }

  logout = () => {
    localStorage.removeItem('currentUser')
  }

  render(){
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/login' component={ () => <Login login={this.login} />} />
            <Route exact path='/signup' component={ () => <Signup currentUser={activeUser} />} />
            <Route exact path="/home" component={ () => <Home currentUser={activeUser}/>} />
            <Route exact path='/report' component={ () => <Report currentUser={activeUser} />} />
            <Route exact path='/businessquestions' component={ () => <BusinessQuestions currentUser={activeUser} />} />
            <Route exact path='/createbusiness' component={() => <CreateBusiness currentUser={activeUser}/>} />
            { localStorage.currentUser? <Redirect to='/home' /> : <Redirect to='/login' />}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
