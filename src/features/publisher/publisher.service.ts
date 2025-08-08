import { PrismaClient } from '@prisma/client';
import { Publisher } from './publisher.model';

const prisma = new PrismaClient();

export const getPublishers = async (): Promise<Publisher[]> => {
  const result = await prisma.publisher.findMany();
  return result;
};

export const getPublisherById = async (
  publisherId: number
): Promise<Publisher | null> => {
  const publisher = await prisma.publisher.findUnique({
    where: { id: publisherId },
  });

  return publisher;
};

export const createPublisher = async (data: Publisher): Promise<Publisher> => {
  const created = await prisma.publisher.create({
    data,
  });

  return created;
};

export const updatePublisher = async (
  publisherId: number,
  publisherData: Publisher
): Promise<Publisher> => {
  const updated = await prisma.publisher.update({
    data: publisherData,
    where: {
      id: publisherId,
    },
  });

  return updated;
};

export const deletePublisher = async (
  publisherId: number
): Promise<Publisher> => {
  const deleted = await prisma.publisher.delete({
    where: {
      id: publisherId,
    },
  });

  return deleted;
};
