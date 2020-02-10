import React, { Component } from 'react'
class QuestionForm extends Component {
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
            <div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label"></label>
                    <div className="col-sm-9">
                        <h2>Ask Your Java Doubts</h2>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Question Title</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder="How to deploy Spring Boot app in Google Cloud Compute Engine?" onChange={this.onLinkChange} value={this.state.value} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Description</label>
                    <div className="col-sm-9">
                        <textarea className="form-control textarea" placeholder="Write your Question Description here....." value={this.state.question} onChange={this.onQuestionChange} rows="10" />
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
}

export default QuestionForm