import z from 'zod';
import { PublisherSchema } from './publisher.schema';

export type Publisher = z.infer<typeof PublisherSchema>;
