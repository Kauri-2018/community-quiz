import React from 'react'
import {Link} from 'react-router-dom'

class QuestionResult extends React.Component {
  componentDidMount () {
    this.props.submitAnswer()
  }

  render () {
    const isCorrect = this.props.isCorrect
    return (
      <div className="question-result-wrapper">
        <h3>Result:</h3>
        <p className={`question ${isCorrect
          ? 'correct'
          : 'incorrect'}`}>
          {isCorrect
            ? 'Yes! Correct!'
            : 'Sorry, that is incorrect.'}
        </p>
        <div className='question-result-continue-wrapper'>
          <Link to={`/${isCorrect
            ? 'question/make'
            : ''}`}>
            <div className='question-result-continue div-button'>
              {isCorrect
                ? 'Continue'
                : 'Restart'}
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default QuestionResult
