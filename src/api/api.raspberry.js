import resource from 'resource-router-middleware'
import raspberries from '../models/model.raspberry'

export default () => resource({
  id: 'raspberry',

  /** GET /api/raspberry - List all entities */
  index ({ params }, res) {
    res.json(raspberries)
  },

})