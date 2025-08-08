import z from 'zod';

export const createCongregationSchema = z.object({
  name: z.string().min(5, 'El nombre de la congregación es requerido'),
  number: z.number().nullish(),
});

export const CongregationSchema = z.object({
  id: z.number(),
  ...createCongregationSchema.shape,
});
