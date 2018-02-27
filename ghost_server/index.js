const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const path = require('path')
const cors = require('cors')
const https = require('https')
const http = require('http')
const fetch = require('node-fetch')
const passport = require('passport')
require('dotenv').config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.use(cookieParser())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1 * 24 * 60 * 60 * 1000
  }
}))
app.use(passport.initialize())
app.use(passport.session())

const port = process.env.PORT || 3001
app.listen(port)

console.log(`Ghosts listening on ${port}`)