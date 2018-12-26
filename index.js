const wikifetch = require('./wikifetch')
const wikiSearchUrl = '&list=search&utf8=&srsearch='
const wikiGeoUrl = '&prop=coordinates&utf8=&titles='
const wikiExtractUrl = '&prop=extracts&exintro&explaintext&redirects=1&titles='

const fetchGeo = location =>
    wikifetch(wikiGeoUrl, encodeURIComponent(location))
        .then(res => res.query.pages[Object.keys(res.query.pages)[0]])

const fetchExtract = query =>
    wikifetch(wikiExtractUrl, encodeURIComponent(query))
        .then(res => res.query.pages[Object.keys(res.query.pages)[0]])

const extractFetch = (hits, fn) =>
    hits.length === 0 ? Promise.resolve([]) : fn(hits[0].title)

const fetchSearchGeo = location =>
    wikifetch(wikiSearchUrl, location)
        .then(res => extractFetch(res.query.search, fetchGeo))

const fetchSearchExtract = query =>
    wikifetch(wikiSearchUrl, query)
        .then(res => extractFetch(res.query.search, fetchExtract))

module.exports = {
  fetchGeo,
  fetchExtract,
  fetchSearchGeo,
  fetchSearchExtract
}
