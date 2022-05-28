const express = require('express')
const cors = require('cors')
const ip = require('ip')
const dotenv = require('dotenv')

/** 开启 env 功能 */
dotenv.config()

const app = express()

app.use(cors({ origin: "*" }))

app.use(express.json())

const address = ip.address()

const port = process.env.PORT || 6060

/* === 2 === start */

/** Login */
const { login } = require('./src/login')
app.post('/login', login)

/** Token */
const { token } = require("./src/token")
app.post('/token', token)

/** UserInfo */
const { user_info } = require('./src/userInfo')
const { authenticate_token } = require('./src/auth')
app.get('/user_info', authenticate_token, user_info)

/* === 2 === end */

app.listen(port, () => {
  console.log('http://%s:%s', address, port);
  console.log('http://%s:%s', 'localhost', port);
})