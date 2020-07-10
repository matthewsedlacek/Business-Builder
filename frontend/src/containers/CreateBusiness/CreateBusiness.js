import React, { Component } from 'react';
import CreateBusinessQuestion from '../../components/CreateBusinessQuestions/CreateBusinessQuestion.js'
import './style.css'

class CreateBusiness extends Component {

    state = {
        questions: [],
        answers:[],
        title: ""
    }

    componentDidMount() {
        fetch('http://localhost:3000/business_questions')
        .then(resp => resp.json())
        .then(json => {
                let answersNew = []
                json.data.map(question => answersNew.push({business_question_id: question.id, answer: ""}))
                this.setState({
                    questions: json.data,
                    answers: answersNew
                })
            })
    }

    handleQuestions = () => {
        return this.state.questions.map(question => question.attributes.title !== "Misc" ? <CreateBusinessQuestion id={question.id} key={question.id} question={question.attributes.question} title={question.attributes.title} onChange={this.handleAnswer}/> : null)
    }

    handleAnswer = (event) => {
        const target = event.target
        let answersNew = this.state.answers
        answersNew[target.id - 1] = {business_question_id: target.id, answer: target.value}

        this.setState({
            answers: answersNew
        })
    }

    handleTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                'name': this.state.title,
                'user_id': 2,
                'business_type_id': 1,
                'business_question_answers_attributes': this.state.answers
            })
        }

        fetch('http://localhost:3000/businesses', configObj)
        .then(resp => resp.json())
        .then(json => console.log(json))
    }

    render() {
        return(
            <form class="create" onSubmit={(event) => this.handleSubmit(event)}>
                <div class="company">
                    <label class="companyLable">Name of Company</label><br></br>
                    <input class="companyName" type="text" placeholder="Company Name" onChange={(event) => this.handleTitle(event)}></input>
                </div>
                <br></br><br></br>
                {this.handleQuestions()}
                <button class="createButton" type="submit">Create</button>
            </form>
        )
    }
}

export default CreateBusiness;