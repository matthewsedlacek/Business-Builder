import React, { Fragment } from "react";
import Question from '../components/Question'
import EditQuestion from '../components/EditQuestion'
import GoalList from "../components/GoalList"

const API = 'http://localhost:3000/businesses'

class BusinessQuestions extends React.Component {
  
    state = {
        alldetails: [],
        questions: [],
        answers: '',
        goals: [],
        currentQuestion: null
    }

    componentDidMount() {
        this.fetchQuestions()
    }

    fetchQuestions = () => {
        // temporary until we can test for login
        fetch(`${API}/1`)
        // fetch(`${API}/${localStorage.getItem("currentUser")}`)
        .then(response => response.json())
        .then(json => 
            this.setState({
            alldetails: json.data.attributes,
            questions: json.data.attributes.business_questions,
            answers: json.data.attributes.business_question_answers,
            goals: json.data.attributes.business_goals

        })
        )    
    }


    renderQuestions = () => {
        let questionList = this.state.questions
        return questionList.map(question => {
            return <Question key={question.id} businessQuestion={question} alldetails={this.state.alldetails} answers={this.state.answers} onDisplayGoals={this.displayGoals} />
        })
    }


    
      displayGoals = (passedQuestion) => {
        this.setState({
            currentQuestion: passedQuestion
        })

        }

        renderGoals = () => {
            if (this.state.currentQuestion) {
                const currentId = this.state.currentQuestion.id
                let goalList = [...this.state.goals]
                let foundGoals = goalList.filter(goal => goal.business_question_answer_id === currentId)
                return foundGoals.map(foundGoal => <GoalList key={foundGoal.id} goal={foundGoal} />)
            }
            return null
        }


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
                    <h3>Question</h3>
                </th>
                <th>
                    <h3>Answer</h3>
                </th>
                </tr>
                {this.renderQuestions()}
            </tbody>
            </table>
            {this.renderGoals()}
            </div>
        );
    }
};

export default BusinessQuestions;

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
