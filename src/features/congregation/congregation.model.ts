import z from 'zod';
import {
  CongregationSchema,
  createCongregationSchema,
} from './congregation.schema';

export type Congregation = z.infer<typeof CongregationSchema>;

export type createCongregation = z.infer<typeof createCongregationSchema>;
