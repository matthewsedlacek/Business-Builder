import React, { Component } from 'react'

class GoalList extends Component {

render() {
const {title, description, status, steps } = this.props.goal
  return (
    <form>
        <h2>{title}</h2>
        <p>{description}</p>
        <textarea type="text" name="answer" value={steps} />
        <label>{status}</label> 
      <button type="submit">Submit</button>
      </form>
        )
    }
}

export default GoalList;
