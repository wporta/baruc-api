import { Router } from 'express';

import {
  getAll,
  getById,
  create,
  update,
  deletePub,
} from './publisher.controller';

const router = Router();

// Route to get all publishers
router.get('/', getAll);

// Route to get a publisher by ID
router.get('/:id', getById);

// Create
router.post('/', create);

// Update
router.put('/:id', update);

// Delete
router.delete('/:id', deletePub);

export default router;
