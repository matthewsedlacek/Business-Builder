import React from "react";

const GoalList = (props) => {

const {question, answer } = props.businessQuestion

// const onChange = (e) => {
//   props.onHandleChange(e)
// }

// const handleSubmit = (e) => {
//   e.preventDefault()
//   props.onHandlePatch()
// }


  return (
    <form>
        <h2>{question}</h2>
        <p>Enter text here...</p>
        {/* <textarea type="text" name="answer" value={answer} onChange={(e) => onChange(e)}/>
        <button type="submit">Submit</button> */}
      </form>
  );
};

export default GoalList;