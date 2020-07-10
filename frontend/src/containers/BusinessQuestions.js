import React from "react";
import Question from '../components/Question'
import EditQuestion from '../components/EditQuestion'
import GoalList from "../components/GoalList"
import { Button } from '@material-ui/core';

// css
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';




const API = 'http://localhost:3000/businesses'
const GOALUPDATE = 'http://localhost:3000/business_goals'

class BusinessQuestions extends React.Component {
  
    state = {

        questions: [],
        answers: '',
        goals: [],
        currentQuestion: null,
        currentGoal: {id: null, value: null, status: "Not Started"}
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
                return foundGoals.map(foundGoal => <GoalList key={foundGoal.id} goal={foundGoal} onUpdateGoal={this.updateGoal} onUpdateStatus={this.updateStatus} onHandlePatch={this.handlePatch} />)
            }
            return null
        }

        updateGoal = (e, newGoal) => {
            let selectedGoal = this.state.currentGoal
            this.setState({
                currentGoal: {
                    ...selectedGoal,
                    id: newGoal.id,
                    value: e.target.value
                }
            })
        }

        updateStatus = (e) => {
            let selectedGoal = this.state.currentGoal
            this.setState({
                currentGoal: {
                    ...selectedGoal,
                    status: e.target.value
                }
            })
        }

        handlePatch = () => {
            const configObject = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    steps: this.state.currentGoal.value,
                    status: this.state.currentGoal.status
                })
            }

            fetch("http://localhost:3000/business_goals/1", configObject)
            .then(response => response.json())
            .then(data => console.log(data))
        }


    render() {
        return (
            <div>
            <Table>
                <TableHead className={"table"} aria-label="spanning table" style={{backgroundColor: '#4C76B5', color: 'black',}}>
                    <TableCell align="center" colSpan={4} style={{backgroundColor: 'black', fontSize: 45, color: 'white'}}>
                            Company Profile
                    </TableCell>
                    <TableRow>
                        <TableCell align="left" >
                            Category
                        </TableCell>
                        <TableCell align="center">
                            Question
                        </TableCell>
                        <TableCell align="left">
                            Answer
                        </TableCell>
                        <TableCell align="left">
                            Goals
                        </TableCell>
                    </TableRow>
                </TableHead>
            <TableBody style={{backgroundColor:'#AECAF2', color: 'black',}} >
                {this.renderQuestions()}
            </TableBody>
            </Table>
                {this.renderGoals()}
            </div>
        );
    }
};

export default BusinessQuestions;

