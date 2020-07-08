import React, { Fragment } from "react";
import Question from '../components/Question'

const API = 'http://localhost:3000/business'

class BusinessQuestions extends React.Component {
  
    state = {
        questions: []
    }

    componentDidMount() {
        this.fetchQuestions()
    }

    fetchQuestions = () => {
        fetch(API)
        .then(response => response.json())
        .then(data => this.setState({
            questions: data
        }))    
    }

    renderQuestions = () => {
        let questionList = this.state.questions
        return questionList.map(question => {
            return <Question key={question.id} businessQuestion={question} />
        })
    }


    // handlePatch = () => {
    //     fetch(`${API}/${this.state.currentQuestion.id}`,{
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Accept: 'application/json'
    //         },
    //             body: JSON.stringify(this.state.currentQuestion)
    //         })
    //         .then(response => response.json())
    //         .then(data => this.setState({
    //             questions: [...this.state.questions.map(question => question.id === data.id? data : question)]
    //         }))
    //     }

    render() {
        return (
            <div>
            <table>
            <tbody>
                <tr>
                <th>
                    <h3>Category</h3>
                </th>
                <th>
                    <h3>Description</h3>
                </th>
                </tr>
                {this.renderQuestions()}
            </tbody>
            </table>
            </div>
        );
    }
};

export default BusinessQuestions;