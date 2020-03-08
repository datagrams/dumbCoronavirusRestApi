const express = require('express'),
      Status  = require('./model')

require('dotenv').config()

const app = express()

app.get('/', async (req, res) => {
  let status
  try {
    status = await Status.findOne().sort({ $natural: -1 })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }

  res.json(status)
})

app.get('/:country', async (req, res) => {
  let status
  try {
    status = await Status.findOne().sort({ $natural: -1 })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }

  const country = status.countries.find(s => s.country.toLowerCase() === req.params.country.toLowerCase())
  res.json(country || {})
})

const port = process.env.PORT || 3000,
      host = process.env.HOST || '127.0.0.1'

require('./init')()
app.listen(port, host, () => { console.log(`server listening on http://${host}:${port}`) })