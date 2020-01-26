import React, { Component } from "react";
import QuestionService from '../api/QuestionService.js'
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
            <div class="col-sm-12">
                <h2>Ask Your Doubts</h2>
                <form onSubmit={this.submitQuestion}>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Question</label>
                        <div className="col-sm-9">
                            <textarea className="form-control textarea" placeholder="Write your Question here..." value={this.state.question} onChange={this.onQuestionChange} rows="10" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Github Link</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" placeholder="git clone url.git" onChange={this.onLinkChange} value={this.state.value} />
                        </div>
                    </div>
                    <div className="form-group-row">
                        <label className="col-sm-3 col-form-label">Screenshot</label>
                        <div className="custom-file col-sm-9">
                            <input type="file" className="custom-file-input" onChange={this.onScreenshotChange} />
                            <label className="custom-file-label">Choose Image</label>
                        </div>
                    </div>
                    <div className="form-group-row">
                        <label className="col-sm-3 col-form-label">File</label>
                        <div className="custom-file col-sm-9">
                            <input type="file" className="custom-file-input" onChange={this.onFileChange} />
                            <label className="custom-file-label">Choose File</label>
                        </div>
                    </div>
                    <button className="btn btn-success button" type="submit">Submit Question</button>
                </form>
            </div>

        )
    }

    onQuestionChange = (event) => {
        this.setState({
            question: event.target.value
        })
    }
    onLinkChange = (event) => {
        this.setState({
            link: event.target.value
        })
    }
    onScreenshotChange = (event) => {
        let reader = new FileReader();
        let file = event.target.files[0];
        console.log(event.target);
        console.log('name=', event.target.name);
        reader.onloadend = () => {
            this.setState({
                screenshot: file,
            });
        }
        reader.readAsDataURL(file)
        event.preventDefault()
    }
    onFileChange = (event) => {
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file
            })
        }
        reader.readAsDataURL(file)
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