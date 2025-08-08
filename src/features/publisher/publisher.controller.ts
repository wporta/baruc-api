import { Request, Response } from 'express';

import {
  getPublishers,
  getPublisherById,
  createPublisher,
  updatePublisher,
  deletePublisher,
} from './publisher.service';
import { PublisherSchema } from './publisher.schema';
import z from 'zod';

export const getAllPublishersController = async (
  req: Request,
  res: Response
) => {
  const publishers = await getPublishers();

  if (publishers) {
    return res.status(200).json(publishers);
  } else {
    return res.status(404).end('Publishers not found');
  }
};

export const getPublisherByIdController = async (
  req: Request,
  res: Response
) => {
  const publisherId = Number.parseInt(req.params.id);

  if (publisherId) {
    const publisher = await getPublisherById(publisherId);

    if (publisher) {
      return res.status(200).json(publisher);
    } else {
      return res
        .status(404)
        .json({ message: `Publisher with id: ${publisherId} not found.` });
    }
  } else {
    return res.status(404).json({ message: 'Id is required' });
  }
};

export const createPublisherController = async (
  req: Request,
  res: Response
) => {
  const publisherData = PublisherSchema.safeParse(req.body);

  if (!publisherData.success) {
    return res.status(400).json(z.treeifyError(publisherData.error));
  }

  const created = await createPublisher(publisherData.data);
  return res.status(201).json(created);
};

export const updatePublisherController = async (
  req: Request,
  res: Response
) => {
  const id = parseInt(req.params.id);
  const publisherData = PublisherSchema.safeParse(req.body);

  if (!publisherData.success) {
    return res.status(400).json(z.treeifyError(publisherData.error));
  }

  const updated = await updatePublisher(id, publisherData.data);
  return res.status(200).json(updated);
};

export const deletePublisherController = async (
  req: Request,
  res: Response
) => {
  const id = parseInt(req.params.id);
  const deleted = await deletePublisher(id);
  return res.status(200).json(deleted);
};
