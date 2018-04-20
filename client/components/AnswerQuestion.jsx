import React from 'react'

import {Link} from 'react-router-dom'

class AnswerQuestion extends React.Component {
  componentDidMount () {
    this.props.getQuestion()
  }

  render () {
    return (
      <div className="answer-question-wrapper">
        <h1>Question</h1>
        <p>{this.props.question}</p>
        <button className="true-btn"
          onClick={this.props.setAnswerTrue}
        >True</button>
        <button className="false-btn"
          onClick={this.props.setAnswerFalse}
        >False</button>
        <Link to="/question/play/result" className="check-answer-btn">Check answer</Link>
      </div>
    )
  }
}

export default AnswerQuestion
