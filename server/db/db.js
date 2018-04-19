const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getQuestions,
  getQuestion,
  updateQuestion,
  addQuestion
}

// function getFruits () {
//   const fruits = ['banana', 'apple', 'feijoa']
//   return Promise.resolve(fruits)
// }

function getQuestions (conn = connection) {
  return conn('questions').select()
}

function getQuestion (id, conn = connection) {
  return conn('questions').where('id', id).first()
}

function addQuestion (question, answer, name, conn = connection) {
  return conn('questions')
    .insert({
      'question': question,
      'answer': answer,
      'times_answered': 0,
      'times_correct': 0,
      'contributor': name,
      'last_answered': 'Date'
    })
}

function updateQuestion (id, userAnswer, conn = connection) {
  return getQuestion(id)
    .then(question => {
      conn('questions')
        .update({
          'answer': userAnswer,
          'times_answered': question.times_answered + 1,
          'times_correct': userAnswer === question.answer
            ? question.times_correct + 1
            : question.times_correct
        })
      return question
    })
    .then((question) => {
      return userAnswer === question.answer
    })
}
