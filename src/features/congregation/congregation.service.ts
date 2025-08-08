import { PrismaClient } from '@prisma/client';
import { Congregation } from './congregation.model';

const prisma = new PrismaClient();

export const getCongregation = async (): Promise<Congregation | null> => {
  const congregation = await prisma.congregation.findFirst();
  return congregation;
};

export const updateCongregation = async (
  id: number,
  data: Congregation
): Promise<Congregation | null> => {
  const updated = await prisma.congregation.update({
    data,
    where: {
      id,
    },
  });
  return updated;
};
