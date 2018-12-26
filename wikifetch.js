const fetch = require('node-fetch')
const wikiprefix = 'https://en.wikipedia.org/w/api.php?action=query&format=json'

module.exports = (suffix, value) => fetch(`${wikiprefix}${suffix}${value}`)
    .then(res => res.json())
