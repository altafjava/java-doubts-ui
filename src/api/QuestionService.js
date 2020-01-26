import Axios from 'axios'
class QuestionService {
    executePostQuestion(formData) {
        return Axios({
            method: 'post',
            url: 'http://localhost:8080/ask-question',
            data: formData,
            headers: {
                'content-type': `multipart/form-data; boundary=${formData._boundary}`,
            },
        })
    }
}

export default new QuestionService()