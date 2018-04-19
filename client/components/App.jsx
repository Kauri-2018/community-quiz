import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import {getQuestion as apiGetQuestion, submitAnswer as apiSubmitAnswer} from '../apiClient'
import Home from './Home'
import AskQuestion from './AskQuestion'
import QuestionResult from './QuestionResult'
import MakeQuestion from './MakeQuestion'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      streak: 0,
      question: {
        id: -1,
        question: '',
        contributor: '',
        percentage: 0
      },
      isCorrect: false,
      error: null
    }
    this.changeName = this.changeName.bind(this)
  }

  changeName (e) {
    this.setState({
      name: e.target.value
    })
  }

  getQuestion () {
    apiGetQuestion()
      .then(question => {
        this.setState({
          question
        })
      })
  }

  submitAnswer (id, userAnswer) {
    apiSubmitAnswer(id, userAnswer)
      .then(wasCorrect => {
        this.setState({
          isCorrect: wasCorrect
        })
      })
  }

  render () {
    return (
      <Router>
        <div className='app'>
          <Route exact path='/' render={() => {
            return <Home changeName={this.changeName} />
          }} />
          <Route path='/question/play' render={() => {
            return <AskQuestion question={this.state.question}/>
          }} />
          <Route path='/question/play/result' render={() => {
            return <QuestionResult isCorrect={this.state.isCorrect} />
          }} />
          <Route path='/question/make' render={() => {
            return <MakeQuestion />
          }} />
        </div>
      </Router>
    )
  }
}

export default App
