const express = require('express')
const dotenv = require('dotenv')
const app = express()
const PORT = process.env.PORT || 4000

if (process.env.NODE_ENV !== 'production') { dotenv.load() }

app.use(express.static('public'))
  .get('/', (req, res) => { res.sendFile(__dirname + '/index.html') })
  .listen(PORT)
