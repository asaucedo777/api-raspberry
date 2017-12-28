import { Router } from 'express'

import facet from './api.facet'
import raspberry from './api.raspberry'
import version from './api.version'


export default ({ config, db }) => {
  console.log('Add api middleware here')
  let router = Router()
  router.use('/facet', facet({ config, db }))
  router.use('/raspberry', raspberry({ config, db }))
  router.get('/version', (req, res) => { res.json({ version }) })
  return router
}
