const crypto = require("crypto")

const generate_token = () => {
  return crypto.randomBytes(64).toString('hex')
}

console.log(generate_token())