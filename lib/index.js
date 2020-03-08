const axios       = require('axios'),
      cheerio     = require('cheerio')

const collect = async () => {

  const data = {}
  const worldMeter = await axios.get('https://www.worldometers.info/coronavirus/')
  const $ = cheerio.load(worldMeter.data)
  const mainCounter = $('.maincounter-number').text().trim().split(/\s+/)
  const casesCounter = $('.number-table-main').contents()

  data.srcUpdated = new Date($('.label-counter').next().text().split(': ')[1])
  data.dbUpdated = new Date()
  data.totals = { cases: toNumber(mainCounter[0]), deaths: toNumber(mainCounter[1]), recovered: toNumber(mainCounter[2]) }
  data.totals.activeCases = toNumber(casesCounter.first().text())
  data.totals.closedCases = toNumber(casesCounter.last().text())

  data.countries = []

  $('table#main_table_countries > tbody > tr').each((i, e) => {
    const countryData = {}
    countryData.country = $($(e).find('td')[0]).text().trim()
    countryData.totalCases = toNumber($($(e).find('td')[1]).text().trim())
    countryData.newCases = toNumber($($(e).find('td')[2]).text().trim())
    countryData.totalDeaths = toNumber($($(e).find('td')[3]).text().trim())
    countryData.newDeaths = toNumber($($(e).find('td')[4]).text().trim())
    countryData.totalRecovered = toNumber($($(e).find('td')[5]).text().trim())
    countryData.activeCases = toNumber($($(e).find('td')[6]).text().trim())
    countryData.criticalCases = toNumber($($(e).find('td')[6]).text().trim())
    countryData.srcUpdate = data.srcUpdated
    countryData.dbUpdated = data.dbUpdated

    data.countries.push(countryData)
  })

  data.countries.pop()
  return data
}

const toNumber = (num) => {
  return Number(num.replace(/,/g, ''))
}

module.exports = {
  collect
}