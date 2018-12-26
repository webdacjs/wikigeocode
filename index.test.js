const {fetchGeo, fetchSearchGeo} = require('./index')

test(`'fetchGeo' dublin to be equal to 53.x, -6.x`, () => {
  return fetchGeo('dublin').then(res => {
    const cooordinates = res.coordinates[0] || {}
    expect(parseInt(cooordinates.lat)).toBe(53)
    expect(parseInt(cooordinates.lon)).toBe(-6)
  })
})

test(`'fetchSearchGeo' cartagena, colombia to be equal to 10.x, -75.x`, () => {
  return fetchSearchGeo('cartagena, colombia').then(res => {
    const cooordinates = res.coordinates[0] || {}
    expect(parseInt(cooordinates.lat)).toBe(10)
    expect(parseInt(cooordinates.lon)).toBe(-75)
  })
})
