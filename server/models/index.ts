
import { Request, Response } from 'express'
import { MongoClient } from 'mongodb'
import { CONF } from '../../config'

import { server } from '../server'

import Database from './database'

MongoClient.connect(CONF('MONGO_URI')).then(client => {
  const db = client.db(CONF('MONGO_DB'))
  const models = [Database]

  models.forEach(model => {
    model.db = db
    model.endpoints().forEach(endpoint => server[endpoint.method.toLowerCase()](
      endpoint.endpoint,
      (req: Request, res: Response) => endpoint.function(req).then((response: Response) => res.json(response))
    ))
  })
})