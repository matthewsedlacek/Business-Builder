import React from "react";
import Question from '../components/Question'

class BusinessQuestions extends React.Component {
  
    state = {
        questions: [],
        currentQuestion: []
    }

    componentDidMount() {
        this.fetchQuestions()
    }

    fetchQuestions = () => {
        fetch('http://localhost:3000/business')
        .then(response => response.json())
        .then(data => this.setState({
            questions: data
        }))    
    }

    renderQuestions = () => {
        let questionList = this.state.questions
        return questionList.map(question => {
            return <Question key={question.id} businessQuestion={question}/>
        })
    }

    editQuestion = () => {
        console.log("I've been clicked")
    }


    render() {
        return (
            <table>
            <tbody>
                <tr>
                <th>
                    <h3>Question</h3>
                </th>
                <th>
                    <h3>Answer</h3>
                </th>
                </tr>
                {this.renderQuestions()}
            </tbody>
            </table>
        );
    }
};

export default BusinessQuestions;