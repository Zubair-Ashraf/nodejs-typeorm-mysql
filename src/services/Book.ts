import { getRepository } from 'typeorm';
import { BookModel } from '../models';
import { CreateBookDto, UpdateBookDto } from '../interfaces/dto';
import { IBook } from '../interfaces/types';

class BookService {
  /**List of books */
  async findAll(limit: string, page: number): Promise<IBook[]> {
    const BooksRepository = await getRepository(BookModel);

    return BooksRepository.find({ take: parseInt(limit) });
  }

  /**Find book by id */
  async findById(id: number): Promise<IBook | undefined> {
    const BooksRepository = await getRepository(BookModel);

    return BooksRepository.findOne(id);
  }

  /**Create new book */
  async create(resource: CreateBookDto): Promise<IBook> {
    const BooksRepository = await getRepository(BookModel);

    let book = await BooksRepository.create({ ...resource });

    return book.save();
  }

  /**Update book */
  async update(id: number, resource: UpdateBookDto): Promise<IBook> {
    const BooksRepository = await getRepository(BookModel);

    return BooksRepository.save({ id, ...resource });
  }

  /**Delete book */
  async delete(id: number): Promise<boolean> {
    const BooksRepository = await getRepository(BookModel);

    const book = await BooksRepository.delete(id);

    return Boolean(book.affected);
  }
}

export default new BookService();
