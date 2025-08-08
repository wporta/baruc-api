import { PrismaClient } from '@prisma/client';
import { Publisher } from './publisher.model';

const prisma = new PrismaClient();

export const getPublishers = async () => {
  const result = await prisma.publisher.findMany();
  return result;
};

export const getPublisherById = async (publisherId: number) => {
  const publisher = await prisma.publisher.findUnique({
    where: { id: publisherId },
  });

  return publisher;
};

export const createPublisher = async (data: Publisher) => {
  const created = await prisma.publisher.create({
    data,
  });

  return created;
};

export const updatePublisher = async (
  publisherId: number,
  publisherData: Publisher
) => {
  const updated = await prisma.publisher.update({
    data: publisherData,
    where: {
      id: publisherId,
    },
  });

  return updated;
};

export const deletePublisher = async (publisherId: number) => {
  const deleted = await prisma.publisher.delete({
    where: {
      id: publisherId,
    },
  });

  return deleted;
};
