const mongoose = require('mongoose'),
      cron     = require('cron').CronJob,
      lib      = require('./lib'),
      Status   = require('./model')

const collect = async () => {
  let status
  try {
    status = await lib.collect()
  } catch (error) {
    throw new Error('Cannot collect!')
  }

  try {
    let s = new Status(status)
    await s.save()
  } catch (error) {
    throw new Error('Cannot save data!')
  }

  return
}
module.exports = async () => {
  try {
    mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  } catch (error) {
    throw new Error('Cannot conenct to mongodb')
  }

  const cronString = process.env.CRON || '0 0 * * * *'

  await collect()

  const job = new cron(cronString, async () => {
    console.log('running job')
    await collect()

  })

  job.start()

}