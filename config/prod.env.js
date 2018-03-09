'use strict'
const prod = 'https://api.douban.com'
const test = 'api'
const host = process.argv[2] === 'test' ? test : prod

module.exports = {
  NODE_ENV: '"production"',
  API_HOST: JSON.stringify(host)
}
