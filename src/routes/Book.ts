import express from 'express';
import {
  getAllBooks,
  createBook,
  getBookById,
  deleteBookById,
  updateBookById,
} from '../controllers/Book';

const router = express.Router();

router.get('/', getAllBooks);

router.get('/:id', getBookById);

router.post('/', createBook);

router.put('/:id', updateBookById);

router.delete('/:id', deleteBookById);

export default router;
