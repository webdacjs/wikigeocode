const axios = require('axios')
const repand = str => str.replace(/&/gi, ' and ')
const wikiprefix = 'https://en.wikipedia.org/w/api.php?action=query&format=json'

module.exports = async function (suffix, value) {
    const res = await axios.get(`${wikiprefix}${suffix}${repand(value)}`)
    return res.data
} 
