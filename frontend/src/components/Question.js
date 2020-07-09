import React, { Fragment } from "react";


class Question extends React.Component {


  handleClick = () => {
    this.props.onDisplayGoals(this.props.businessQuestion)
  }

  
  render() {
    const { question, title } = this.props.businessQuestion
    const ANSWER = this.props.answers.filter(foundAnswer => foundAnswer.business_question_id === this.props.businessQuestion.id)[0]

    return (
      <Fragment>
      <tr>
        <td>{title}</td>
        <td>{question !== null ? question : "Use this section for any additional goals"}</td>
        <td>{ANSWER.answer}</td>
        <button type="button" onClick={() => this.handleClick()}>Show Goals</button>
      </tr>
      </Fragment>
    )
  };
}
export default Question;

