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

app.listen(port, () => {
  console.log('http://%s:%s', address, port);
  console.log('http://%s:%s', 'localhost', port);
})