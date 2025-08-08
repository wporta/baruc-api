import z from 'zod';
import { createPublisherSchema, PublisherSchema } from './publisher.schema';

export type Publisher = z.infer<typeof PublisherSchema>;
export type createPublisher = z.infer<typeof createPublisherSchema>;
