import { Request, Response } from 'express';

const getAllPublishers = (req: Request, res: Response) => {
  //return 'Get All Publishers from Controller';
  res.status(200).end('Get All Publishers from Controller');
};

export { getAllPublishers };
