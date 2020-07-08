import React from "react";
import GoalList from "./GoalList"

// const ANSWERSAPI = 
// c

class Question extends React.Component {

  state = {
    answers: [],
    goals: ''
  }

//   componentDidMount () {
//     this.fetchAnswers()
//     this.fetchGoals()
//   }

//   fetchQuestions = () => {
//     // temporary until we can test for login
//     fetch(`${API}/1`)
//     // fetch(`${API}/${localStorage.getItem("currentUser")}`)
//     .then(response => response.json())
//     .then(json => 
//         this.setState({
//         questions: json.data.attributes.business_questions
//     })
//     )    
// }


  renderGoals = (e) => {
    console.log(e)
      return <GoalList businessQuestion={e} />
  }
  
  render() {
    const { question, answer, title } = this.props.businessQuestion
  return (
      <tr>
        <td>{title}</td>
        <td>{question !== null ? question : "Use this section for any additional goals"}</td>
        <td>{answer}</td>
        {/* <button type="button" onClick={this.renderGoals()}>Edit Question</button> */}
        <button type="button" onClick={this.renderGoals()}>Show Goals</button>
      </tr>
    );
  }
};

export default Question;

