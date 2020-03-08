const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  srcUpdated: Date,
  dbUpdated: Date,
  totals: {
    cases: Number,
    deaths: Number,
    recovered: Number,
    activeCases: Number,
    closedCases: Number
  },
  countries: Array
}, {
  timestamps: { createdAt: 'createdAt' }
})

module.exports = mongoose.model('Status', schema)