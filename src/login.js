const JWT = require('jsonwebtoken')

const login = (req, res) => {
  /**
   * req: 获取到的数据
   * res: 要发送走的数据 */
  const username = req.body.username
  const user = { name: username }

  const accessToken = JWT.sign(
    user,
    process.env.ACCESS_SECRET
  )

  res.json({ accessToken: accessToken })
}

module.exports = { login }