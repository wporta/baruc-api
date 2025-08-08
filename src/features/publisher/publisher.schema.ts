import { group } from 'console';
import z, { number } from 'zod';

export const createPublisherSchema = z.object({
  firstName: z.string().min(5, 'El nombre es requerido.'),
  lastName: z.string().min(5, 'El apellido es requerido.'),
  birthday: z.date().nullish(),
  baptismDate: z.date().nullish(),
  groupId: z.number().nullish(),
});

export const PublisherSchema = z.object({
  id: number(),
  ...createPublisherSchema.shape,
});
