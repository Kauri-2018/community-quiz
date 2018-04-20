const _ = require('lodash')

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getQuestions,
  getRandomQuestion,
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

function getRandomQuestion (conn = connection) {
  return conn('questions').select()
    .then(questions => {
      const randomQuestion = _.shuffle(questions)[0]
      return randomQuestion
    })
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
      return conn('questions')
        .update({
          'times_answered': question.times_answered + 1,
          'times_correct': userAnswer === Number(question.answer)
            ? question.times_correct + 1
            : question.times_correct,
          'last_answered': 'Date'
        })
        .where('questions.id', '=', id)
    })
    .then(rowsUpdated => {
      return getQuestion(id)
        .then(question => {
          return userAnswer === Number(question.answer)
        })
    })
}
