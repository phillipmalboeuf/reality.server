
import express from 'express'
import bodyparser from 'body-parser'

import { CONF } from '../config'


export const server = express()
server.use(bodyparser.json())

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')
  res.header('Access-Control-Allow-Origin', '*')
  next()
})



require('./models')


server.get('/', (req, res) => {
  return res.send('HI!')
})



const port = process.env.PORT || 8889
server.listen(port, () => {
  console.log(`Listening on port ${port}...`)
});