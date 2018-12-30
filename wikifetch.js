const {fetch} = require('simple-fetch-cache')

const wikiprefix = 'https://en.wikipedia.org/w/api.php?action=query&format=json'

module.exports = (suffix, value) => fetch(`${wikiprefix}${suffix}${value}`, 3600000)
    .then(res => res.reply)
