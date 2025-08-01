import { Router } from 'express';

import publisherRouter from '../features/publisher/publisher.route';

const v1Router = Router();
const router = Router();

// Feature Routes for v1
v1Router.use('/publishers', publisherRouter);

// Mount v1 API
router.use('/v1', v1Router);

export default router;
