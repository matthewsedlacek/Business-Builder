import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from '../components/login.js'
import Report from '../components/report.js'
import Home from '../components/home.js'
import Signup from '../components/signup.js'
import BusinessQuestions from './BusinessQuestions.js'
import Navbar from '../components/navbar'
import CreateBusiness from './CreateBusiness.js'

class App extends React.Component {
  constructor() {
    super()
    
    this.state = {
      currentUser: ''
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
    // console.log(json.data)
    this.setState({users: json.data})
 })
  }

  login = (user) => {
    const users = this.state.users
    // console.log(users[0].attributes.username)
    let u
    for(u of users){
      if (u.attributes.username === user){
        this.setState({currentUser: u})
        localStorage.setItem('currentUser', JSON.stringify(u))
        console.log(u)
        // console.log(localStorage.getItem('currentUser'))
      }
    }
    // console.log(this.state.currentUser)
    // this.setState ({currentUser: user})
    // localStorage.setItem('currentUser', user)  
  }

  logout = () => {
    this.setState({currentUser: ''})
    localStorage.removeItem('currentUser')
  }

  render(){
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/login' component={ () => <Login login={this.login} />} />
            <Route exact path='/signup' component={ () => <Signup handleTestingButton={this.handleTestingButton} login={this.login} />} />
            <Route exact path="/home" component={ () => <Home currentUser={this.state.currentUser} logout={this.logout} />} />
            <Route exact path='/report' component={ () => <Report currentUser={this.state.currentUser} />} />
            <Route exact path='/businessquestions' component={BusinessQuestions} />
            { localStorage.currentUser? <Redirect to='/home' /> : <Redirect to='/login' />}
            {/* <Redirect to='/login' /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
