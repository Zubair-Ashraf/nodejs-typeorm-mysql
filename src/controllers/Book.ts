import { Request, Response } from 'express';
import { BookService } from '../services';

export const getAllBooks = async (req: Request, res: Response) => {
  const limit = req.query.limit as string;

  const book = await BookService.findAll(limit, 1);

  res.send(book);
};

export const createBook = async (req: Request, res: Response) => {
  const book = await BookService.create(req.body);

  res.send(book);
};

export const getBookById = async (req: Request, res: Response) => {
  const { id } = req.params || {};

  const book = await BookService.findById(parseInt(id));

  res.send(book);
};

export const updateBookById = async (req: Request, res: Response) => {
  const { id } = req.params || {};

  const book = await BookService.update(parseInt(id), req.body);

  res.send(book);
};

export const deleteBookById = async (req: Request, res: Response) => {
  const { id } = req.params || {};

  const book = await BookService.delete(parseInt(id));

  res.send(book);
};
