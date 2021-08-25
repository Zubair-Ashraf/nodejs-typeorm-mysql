export interface CreateBookDto {
  id: number;
  title: string;
  description: string;
  price: number;
  author: string;
  publishDate: Date;
}

export interface UpdateBookDto {
  title?: string;
  description?: string;
  price?: number;
  author?: string;
  publishDate?: Date;
}
