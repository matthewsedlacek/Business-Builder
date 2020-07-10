import React, { Component, Fragment } from 'react';
import './style.css'

class CreateBusinessQuestion extends Component {

    render() {

        const { id, question, title } = this.props

        return(
            <Fragment >
                <div>
                    <div class="questionDiv">
                        <label class="title">{title}</label><br></br>
                        <label class="question">{question}</label><br></br>
                        <textarea class="answer" id={id} placeholder="Response" onChange={(event) => this.props.onChange(event)}/>
                    </div>
                    <br></br><br></br>
                </div>
            </Fragment>
        )
    }
}

export default CreateBusinessQuestion;