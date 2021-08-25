import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BookModel extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  price!: number;

  @Column()
  author!: string;

  @Column()
  publishDate!: Date;
}
