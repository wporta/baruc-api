import { Request, Response } from 'express';
import { getCongregation, updateCongregation } from './congregation.service';

export const getCongregationController = async (_: Request, res: Response) => {
  const congregation = await getCongregation();

  if (!congregation) {
    return res.status(404).json({ message: 'No se encontró congregación.' });
  }

  return res.status(200).json(congregation);
};

export const updateCongregationController = async (
  req: Request,
  res: Response
) => {
  const congregation = await getCongregation();

  if (!congregation) {
    return res.status(404).json({ message: 'No se encontró congregación.' });
  }

  const updated = await updateCongregation(congregation.id, req.body);

  return res.status(200).json(updated);
};
