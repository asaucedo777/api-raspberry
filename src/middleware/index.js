import { Router } from 'express';

export default ({ config, db }) => {
	console.log('Add middleware here')
  let routes = Router();
  console.log('config: ' + config)
  console.log('db: ' + db)
	return routes;
}
