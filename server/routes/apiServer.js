const express = require('express')

const db = require('../db')

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
  db.updateQuestion()
    .then(isCorrect => {
      res.send(isCorrect)
    })
})

router.post('/add', (req, res) => {
  db.addQuestion()
    .then(question => {
      res.json({question})
    })
})

module.exports = router
