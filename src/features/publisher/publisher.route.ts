import { Router } from 'express';

import { getAll, getById, create } from './publisher.controller';

const router = Router();

// Route to get all publishers
router.get('/', getAll);

// Route to get a publisher by ID
router.get('/:id', getById);

// Create
router.post('/', create);

export default router;
