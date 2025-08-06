import { Request, Response } from 'express';

import {
  getPublishers,
  getPublisherById,
  createPublisher,
  updatePublisher,
  deletePublisher,
} from './publisher.service';

export const getAll = async (req: Request, res: Response) => {
  const publishers = await getPublishers();

  if (publishers) {
    res.status(200).json(publishers);
  } else {
    res.status(404).end('Publishers not found');
  }
};

export const getById = async (req: Request, res: Response) => {
  const publisherId = Number.parseInt(req.params.id);

  if (publisherId) {
    const publisher = await getPublisherById(publisherId);

    if (publisher) {
      res.status(200).json(publisher);
    } else {
      res
        .status(404)
        .json({ message: `Publisher with id: ${publisherId} not found.` });
    }
  } else {
    res.status(404).json({ message: 'Id is required' });
  }

  console.log(publisherId);
};

export const create = async (req: Request, res: Response) => {
  const publisherData = req.body;

  const created = await createPublisher(publisherData);

  res.status(201).json(created);
};

export const update = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const updated = await updatePublisher(id, req.body);
  res.status(200).json(updated);
};

export const deletePub = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const deleted = await deletePublisher(id);
  res.status(200).json(deleted);
};
