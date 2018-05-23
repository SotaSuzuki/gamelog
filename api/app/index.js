const express = require('express')
const router = require('./routes')
const app = express()

const ORIGIN = 'http://localhost:8080'

const headers = {
  'Access-Control-Allow-Origin': ORIGIN,
}

app.use((req, res, next) => {
  res.set(headers)
  next()
})

app.use(router)

app.listen(8081, () => {
  console.log('listening to port 8081')
})
