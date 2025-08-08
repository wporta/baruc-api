import { Router } from 'express';

import {
  getAllPublishersController,
  getPublisherByIdController,
  createPublisherController,
  updatePublisherController,
  deletePublisherController,
} from './publisher.controller';

const router = Router();

// Route to get all publishers
router.get('/', getAllPublishersController);

// Route to get a publisher by ID
router.get('/:id', getPublisherByIdController);

// Create
router.post('/', createPublisherController);

// Update
router.put('/:id', updatePublisherController);

// Delete
router.delete('/:id', deletePublisherController);

export default router;
