const JWT = require('jsonwebtoken')
const { generateAccessToken, generateRefreshToken } = require('./auth')
const axios = require('axios')

const login = (req, res) => {
  /**
   * req: 获取到的数据
   * res: 要发送走的数据 */
  const username = req.body.username
  const user = { name: username }

  const accessToken = generateAccessToken(user, '20s')
  const refreshToken = generateRefreshToken(user)
  axios.post(process.env.DATA_ADDRESS + "/auth", {
    name: username, token: refreshToken
  }).catch(err => {
    console.log(err);
  })

  res.json({ accessToken, refreshToken })
}

module.exports = { login }