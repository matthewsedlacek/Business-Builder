import React from "react";
import Question from '../components/Question'

class BusinessQuestions extends React.Component {
  
    state = {
        questions: []
    }

    componentDidMount() {
        this.fetchQuestions()
    }

    fetchQuestions = () => {
        fetch()
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