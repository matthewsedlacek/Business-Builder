import React from "react";
import Question from '../components/Question'
import EditQuestion from '../components/EditQuestion'
import GoalList from "../components/GoalList"
import { Button } from '@material-ui/core';



const API = 'http://localhost:3000/businesses'
const GOALUPDATE = 'http://localhost:3000/business_goals'

class BusinessQuestions extends React.Component {
  
    state = {

        questions: [],
        answers: '',
        goals: [],
        currentQuestion: null,
        currentGoal: {id: null, value: null}
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
                return foundGoals.map(foundGoal => <GoalList key={foundGoal.id} goal={foundGoal} onUpdateGoal={this.updateGoal} onHandlePatch={this.handlePatch} />)
            }
            return null
        }

        updateGoal = (e, newId) => {
            this.setState({
                currentGoal: {
                    id: newId,
                    value: e.target.value
                }
            })
        }

        handlePatch = () => {
            console.log(this.state.currentGoal.value)

            const configObject = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    "steps": this.state.currentGoal.value
                })
            }

            fetch("http://localhost:3000/business_goals/1", configObject)
            .then(response => response.json())
            .then(data => console.log(data))
        }


    render() {
        return (
            <div>
            <table className={classes.table}>
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

