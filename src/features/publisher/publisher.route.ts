import { Router } from 'express';

import { getAllPublishers } from './publisher.controller';

const router = Router();

// Route to get all publishers
router.get('/', getAllPublishers);

// Route to get a publisher by ID
//router.get('/:id', getPublisherById);

export default router;
