import z from 'zod';

export const PublisherSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  birthday: z.date(),
  baptismDate: z.date(),
});
