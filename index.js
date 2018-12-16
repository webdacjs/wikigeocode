const fetch = require('node-fetch')
const wikiprefix = 'https://en.wikipedia.org/w/api.php?action=query'
const wikiSearchUrl = `${wikiprefix}&list=search&utf8=&format=json&srsearch=`
const wikiGeoUrl = `${wikiprefix}&prop=coordinates&utf8=&format=json&titles=`

const extractFetchGeo = hits =>
    hits.length === 0 ? Promise.resolve([]) : fetchGeo(hits[0].title)

const fetchSearch = location =>
    fetch(`${wikiSearchUrl}${location}`)
        .then(res => res.json())
        .then(res => extractFetchGeo(res.query.search))

const fetchGeo = location =>
    fetch(`${wikiGeoUrl}${location}`)
        .then(res => res.json())
        .then(res => res.query.pages[Object.keys(res.query.pages)[0]])

module.exports = {
    fetchSearch,
    fetchGeo
}
