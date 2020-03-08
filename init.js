const mongoose = require('mongoose'),
      cron     = require('cron').CronJob,
      lib      = require('./lib'),
      Status   = require('./model')

module.exports = async () => {
  try {
    mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  } catch (error) {
    throw new Error('Cannot conenct to mongodb')
  }

  const cronString = process.env.CRON || '0 0 * * * *'

  const job = new cron(cronString, async () => {
    console.log('running job')
    let status
    try {
      status = await lib.collect()
    } catch (error) {
      console.error(error)
      throw new Error('Cannot collect data!')
    } 

    try {
      let s = new Status(status)
      await s.save()
    } catch (error) {
      console.error(error)
      throw new Error('Cannot save data!')
    }

  })

  job.start()

}