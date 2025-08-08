import z from 'zod';

export const CongregationSchema = z.object({
  name: z.string().min(5, 'El nombre de la congregación es requerido'),
  number: z.number().optional(),
});
