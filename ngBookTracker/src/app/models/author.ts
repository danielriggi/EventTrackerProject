import { Book } from './book';

export class Author {
  id: number;
  name: string

  constructor(id: number = 0, name: string = "") {
    this.id = id;
    this.name = name
  }
}
