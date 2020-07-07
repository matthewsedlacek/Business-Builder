import React, { Fragment } from "react";
import Question from '../components/Question'
import EditQuestion from '../components/EditQuestion.js'

const API = 'http://localhost:3000/business'

class BusinessQuestions extends React.Component {
  
    state = {
        questions: [],
        currentQuestion: []
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
            return <Question key={question.id} businessQuestion={question} onEditQuestion={this.changeQuestion} />
        })
    }
    changeQuestion = questionUpdate => {
        this.setState ({
            currentQuestion: questionUpdate
        })
    }

    handleChange = (e) => {
        console.log(e.target.value)
        let selectedQuestion = this.state.currentQuestion
        this.setState({
            currentQuestion: {
                ...selectedQuestion,
                [e.target.name]:e.target.value
            }
        })
    }

    handlePatch = () => {
        fetch(`${API}/${this.state.currentQuestion.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
                body: JSON.stringify(this.state.currentQuestion)
            })
            .then(response => response.json())
            .then(data => this.setState({
                questions: [...this.state.questions.map(question => question.id === data.id? data : question)]
            }))
        }

    render() {
        return (
            <div>
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
            <Fragment>
                <EditQuestion onHandlePatch={this.handlePatch} onHandleChange={this.handleChange} selectedQuestion={this.state.currentQuestion} />
            </Fragment>
            </div>
        );
    }
};

export default BusinessQuestions;