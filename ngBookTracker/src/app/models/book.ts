
import { Author } from './author';
import { Language } from './language';
import { Publisher } from './publisher';

export class Book {
  id: number;
  title: string;
  isbn: string;
  numPages: number;
  publicationDate: String;
  language: Language;
  publisher: Publisher;
  authors: Author[];

  constructor(
    id: number = 0,
    title: string = "",
    isbn: string = "",
    numPages: number = 0,
    publicationDate: String = "",
    language: Language = new Language(),
    publisher: Publisher = new Publisher(),
    authors: Author[] = []
  ) {
    this.id = id;
    this.title = title;
    this.isbn = isbn;
    this.numPages = numPages;
    this.publicationDate = publicationDate;
    this.language = language;
    this.publisher = publisher;
    this.authors = authors;
  }
}
