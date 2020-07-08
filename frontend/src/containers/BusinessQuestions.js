import React, { Fragment } from "react";
import Question from '../components/Question'
import EditQuestion from '../components/EditQuestion'

const API = 'http://localhost:3000/businesses'

class BusinessQuestions extends React.Component {
  
    state = {
        questions: [],
        currentQuestion: ''
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
            questions: json.data.attributes.business_questions
        })
        )    
    }

    renderQuestions = () => {
        let questionList = this.state.questions
        console.log(questionList)
        return questionList.map(question => {
            return <Question key={question.id} businessQuestion={question} />
        })
    }

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
            </div>
        );
    }
};

export default BusinessQuestions;


