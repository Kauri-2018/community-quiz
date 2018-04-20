import React from 'react'

<<<<<<< HEAD
import {Link} from 'react-router-dom'

class MakeQuestion extends React.Component {
  constructor (props) {
    super(props) 
      this.state = {
        question: '',
        currentAnswer: false
      }
    this.addQuestion = this.addQuestion.bind(this)
  }

 addQuestion (e) {
  e.preventDefault()
    const newQuestion = this.setState({
      question: e.target[0].question,
      currentAnswer: e.target.currentAnswer.value
    })
    // send newQuestion to apiClient function here
 }

  render () {
    return (
    <div className="make-question-wrapper">
      <div className="make-question-form-wrapper">
      <form onSubmit={this.addQuestion} >
        Question: <input name='question' />
        <input type="radio" name="currentAnswer" value="true" />
        <input type="radio" name="currentAnswer" value="false"  />
        <button type='submit'>Submit Question</button>
      </form>
      </div>
    </div>
    )
  }
=======
const MakeQuestion = () => {
  return (
    <div className="make-question-wrapper">
      <h1>Make Question</h1>
    </div>
  )
>>>>>>> development
}

export default MakeQuestion
