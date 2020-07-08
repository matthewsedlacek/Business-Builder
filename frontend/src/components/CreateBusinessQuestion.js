import React, { Component, Fragment } from 'react';

class CreateBusinessQuestion extends Component {

    render() {

        const { id, question, title } = this.props

        return(
            <Fragment >
                <label>{title}</label><br></br>
                <label>{question}</label><br></br>
                <textarea id={id} placeholder="Response" onChange={(event) => this.props.onChange(event)}/><br></br><br></br>
            </Fragment>
        )
    }
}

export default CreateBusinessQuestion;