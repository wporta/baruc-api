import z from 'zod';
import { CongregationSchema } from './congregation.schema';

export type Congregation = z.infer<typeof CongregationSchema>;
