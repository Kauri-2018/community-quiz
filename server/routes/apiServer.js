const express = require('express')

const db = require('../db/db.js')

const router = express.Router()

router.get('/', (req, res) => {
  db.getQuestions()
    .then(questions => {
      res.json({questions})
    })
})

router.get('/random', (req, res) => {
  db.getRandomQuestion()
    .then(question => {
      res.json({question})
    })
})

// Stretch
router.get('/oldest', (req, res) => {
  db.getOldestQuestion()
    .then(question => {
      res.json({question})
    })
})

router.put('/:id/update', (req, res) => {
  const id = Number(req.params.id)
  const userAnswer = Number(req.query.answer)
  db.updateQuestion(id, userAnswer)
    .then(isCorrect => {
      res.send(isCorrect)
    })
})

router.post('/add', (req, res) => {
  const name = 'Cam'
  const question = 'What is my name'
  const answer = true
  db.addQuestion(question, answer, name)
    .then(question => {
      res.json({question})
    })
})

module.exports = router
