import { group } from 'console';
import z from 'zod';

export const PublisherSchema = z.object({
  firstName: z.string().min(5, 'El nombre es requerido.'),
  lastName: z.string().min(5, 'El apellido es requerido.'),
  birthday: z.date().optional(),
  baptismDate: z.date().optional(),
  groupId: z.number().optional(),
});
