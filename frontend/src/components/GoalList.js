import React, { Component } from 'react'

class GoalList extends Component {

handleChange = (e) => {
  this.props.onUpdateGoal(e, this.props.goal.id)
}

handleSubmit = (e) => {
  e.preventDefault()
  this.props.onHandlePatch()
}


render() {
const {title, description, status, steps } = this.props.goal
  return (
    <form onSubmit={(e) => this.handleSubmit(e)}>
        <h2>{title}</h2>
        <p>{description}</p>
        <textarea type="text" name="currentGoal" onChange={(e) => this.handleChange(e)} value={steps} />
        <label name="status" onChange={this.handleChange}>{status}</label> 
       <button type="submit">Submit</button>
      </form>
        )
    }
}

export default GoalList;
