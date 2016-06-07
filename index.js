'use strict'

const got = require('got')

module.exports = function() {
  let url = 'https://status.github.com/api/last-message.json'

  return got(url, { json: true })
    .then(response => {
      return
      {
        status: response.body.status,
        message: response.body.body
      }
    })
    .catch(error => {
      return error.response.body
    })
}
