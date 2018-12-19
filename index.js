const fetch = require('node-fetch')
const wikiprefix = 'https://en.wikipedia.org/w/api.php?action=query&format=json'
const wikiSearchUrl = `${wikiprefix}&list=search&utf8=&srsearch=`
const wikiGeoUrl = `${wikiprefix}&prop=coordinates&utf8=&titles=`
const wikiExtractUrl = `${wikiprefix}&prop=extracts&exintro&explaintext&redirects=1&titles=`

const fetchGeo = location =>
    fetch(`${wikiGeoUrl}${location}`)
        .then(res => res.json())
        .then(res => res.query.pages[Object.keys(res.query.pages)[0]])

const fetchExtract = query =>
    fetch(`${wikiExtractUrl}${query}`)
        .then(res => res.json())
        .then(res => res.query.pages[Object.keys(res.query.pages)[0]])

const extractFetch = (hits, fn) =>
    hits.length === 0 ? Promise.resolve([]) : fn(hits[0].title)

const fetchSearchGeo = location =>
    fetch(`${wikiSearchUrl}${location}`)
        .then(res => res.json())
        .then(res => extractFetch(res.query.search, fetchGeo))

const fetchSearchExtract = query =>
    fetch(`${wikiSearchUrl}${query}`)
        .then(res => res.json())
        .then(res => extractFetch(res.query.search, fetchExtract))

module.exports = {
    fetchGeo,
    fetchExtract,
    fetchSearchGeo,
    fetchSearchExtract
}
