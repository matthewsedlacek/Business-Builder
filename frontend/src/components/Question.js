
import React from "react";



const Question = (props) => {

const handleClick = () => {
  props.onEditQuestion(props.businessQuestion)
}

  const { question, answer } = props.businessQuestion

  return (
    <tr>
      <td>{question}</td>
      <td>{answer}</td>
      <td><button type="button" onClick={handleClick}>Update</button></td>
    </tr>
  );
};

export default Question;