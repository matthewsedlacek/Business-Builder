import React, { Component } from 'react'
// css
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class GoalList extends Component {


handleClick = (e) => {
  this.props.onUpdateStatus(e)
}


handleChange = (e) => {
  this.props.onUpdateGoal(e, this.props.goal)
}

handleSubmit = (e) => {
  e.preventDefault()
  this.props.onHandlePatch()
}


render() {
const {title, description, status, steps } = this.props.goal
  return (
    <form onSubmit={(e) => this.handleSubmit(e)}>
    <FormControl component="fieldset">
        <h2>{title}</h2>
        <p>{description}</p>
        <textarea type="text" name="steps" onChange={(e) => this.handleChange(e)} value={steps} />
        <RadioGroup defaultValue={status} aria-label="gender" name="status">
          <FormControlLabel name="status" value="Not Started" control={<Radio />} label="Not Started" onClick={(e) => this.handleClick(e)} />
          <FormControlLabel name="status" value="In-Process" control={<Radio />} label="In-Process" onClick={(e) => this.handleClick(e)}/>
          <FormControlLabel name="status" value="Complete" control={<Radio />} label="Complete" onClick={(e) => this.handleClick(e)}/>
        </RadioGroup>
       <button type="submit" >Submit</button>
      </FormControl>
      </form>
        )
    }
}

export default GoalList;
