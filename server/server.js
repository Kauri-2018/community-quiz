const path = require('path')
const express = require('express')

const apiRoutes = require('./routes/apiServer')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/questions', apiRoutes)

module.exports = server
