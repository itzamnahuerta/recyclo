const { db } = require('./models')

const resetDb = async () => {
  try {
    await db.sync({ force: true })
    print('Database is synced')
  } catch (e) {
    print(e)
  } finally {
    await process.exit()
  }
}

resetDb()