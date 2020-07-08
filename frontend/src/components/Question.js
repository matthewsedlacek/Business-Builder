import React from "react";
import GoalList from "./GoalList"

class Question extends React.Component {

  fetchGoals = (e) => {
    console.log(e)
      return <GoalList businessQuestion={e} />
  }
  
  render() {
    // const { question, answer } = this.props.businessQuestion
  return (
      <tr>
        <td>{this.props.businessQuestion.question}</td>
        <td>{this.props.businessQuestion.answer}</td>
        <button type="button" onClick={(e) => this.fetchGoals(this.props.businessQuestion)}>Show Goals</button>
      </tr>
    );
  }
};

export default Question;

//   state = {
//     currentQuestion: '',
//   }

//   updateGoal = event => {
//     this.setState ({
//         [event.target.name]: event.target.value
//     })
// }

// handleChange = (e) => {
//     console.log(e.target.value)
//     let selectedQuestion = this.state.currentQuestion
//     this.setState({
//         currentQuestion: { e }
//     })
// }

//   handleClick = () => {
//     props.onEditQuestion(props.businessQuestion)
//   }