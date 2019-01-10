const {fetch} = require('simple-fetch-cache')
const repand = str => str.replace(/&/gi, ' and ')
const wikiprefix = 'https://en.wikipedia.org/w/api.php?action=query&format=json'

module.exports = (suffix, value) => fetch(`${wikiprefix}${suffix}${repand(value)}`, 3600000)
    .then(res => res.reply)
