import React from 'react'

import {Link} from 'react-router-dom'

class AnswerQuestion extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      question: '',
      isCorrect: false
    }
  }

  componentDidMount () {
    this.props.getQuestion()
      .then(question => {
        this.setState({
          question
        })
      })
  }

  render () {
    return (
      <div className="answer-question-wrapper">
        <h1>Question</h1>
        <p>{this.state.question}</p>
        <button className="true-btn"
          onClick={this.props.setAnswer}
        >True</button>
        <button className="false-btn"
          onClick={this.props.setAnswer}
        >False</button>
        <Link to="/question/play/result" className="check-answer-btn">Check answer</Link>
      </div>
    )
  }
}

export default AnswerQuestion
