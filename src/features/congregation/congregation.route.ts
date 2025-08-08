import { Router } from 'express';
import {
  getCongregationController,
  updateCongregationController,
} from './congregation.controller';

const router = Router();

router.get('/', getCongregationController);

router.put('/', updateCongregationController);

export default router;
