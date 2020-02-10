import React, { Component } from "react";
import QuestionService from '../api/QuestionService.js'
import './MiddleColumn.css'
import QuestionForm from './QuestionForm'

class MiddleColumn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            question: '',
            link: '',
            screenshot: '',
            file: ''
        }
    }
    render() {
        return (
            <div className="col-sm-12">
                <form onSubmit={this.submitQuestion}>
                    <div style={{ marginTop: "100px" }}>
                        <QuestionForm />
                    </div>
                </form>
            </div>
        )
    }


    submitQuestion = (event) => {
        console.log('id=', event.target.nodeName)
        let formData = new FormData()
        formData.set('question', this.state.question)
        formData.set('link', this.state.link)
        formData.set('screenshot', this.state.screenshot)
        formData.set('file', this.state.file)
        QuestionService.executePostQuestion(formData);
        event.preventDefault();
    }
}

export default MiddleColumn