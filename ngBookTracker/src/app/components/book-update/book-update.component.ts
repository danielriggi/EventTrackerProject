import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from '../../pipes/search-filter.pipe';
import { Author } from '../../models/author';
import { AuthorService } from '../../services/author.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Language } from '../../models/language';
import { Publisher } from '../../models/publisher';
import { LanguageService } from '../../services/language.service';
import { PublisherService } from '../../services/publisher.service';

@Component({
  selector: 'app-book-update',
  standalone: true,
  imports: [
    MatSelectModule,
    CommonModule,
    FormsModule,
    SearchFilterPipe,
    ReactiveFormsModule,
  ],
  templateUrl: './book-update.component.html',
  styleUrl: './book-update.component.css',
})
export class BookUpdateComponent implements OnInit {
  editBook: Book = new Book();
  selectedAuthor: Author = new Author();
  selectedLanguage: Language = new Language();
  selectedPublisher: Publisher = new Publisher();
  authors: Author[] = [];
  languages: Language[] = [];
  publishers: Publisher[] = [];
  searchText: string = '';
  updateSuccess: boolean = false;

  constructor(
    private authorService: AuthorService,
    private languageService: LanguageService,
    private publisherService: PublisherService,
    private bookService: BookService,
    private searchFilterPipe: SearchFilterPipe,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAuthor();
    this.loadLanguage();
    this.loadPublisher();
    this.activatedRoute.params.subscribe((params) => {
      let bookId = params['id'];
      this.loadBook(bookId);
    });
  }

  loadBook(bookId: number): void {
    this.bookService.show(bookId).subscribe({
      next: (book) => {
        this.editBook = book;
        this.selectedAuthor = this.editBook.authors[0];
      },
      error: (problem) => {
        console.error(
          'BookUpdateHttpComponent.loadBook(): error loading book:'
        );
        console.error(problem);
      },
    });
  }

  loadAuthor(): void {
    this.authorService.index().subscribe({
      next: (authors) => {
        this.authors = authors;
      },
      error: (problem) => {
        console.error(
          'BookUpdateHttpComponent.loadAuthor(): error loading authors:'
        );
        console.error(problem);
      },
    });
  }

  loadLanguage(): void {
    this.languageService.index().subscribe({
      next: (languages) => {
        this.languages = languages;
      },
      error: (problem) => {
        console.error(
          'LanguageUpdateHttpComponent.loadAuthor(): error loading languages:'
        );
        console.error(problem);
      },
    });
  }

  loadPublisher(): void {
    this.publisherService.index().subscribe({
      next: (publishers) => {
        this.publishers = publishers;
      },
      error: (problem) => {
        console.error(
          'PublisherpdateHttpComponent.loadAuthor(): error loading publishers:'
        );
        console.error(problem);
      },
    });
  }

  updateBook(editBook: Book): void {
    // Update the first author of the editBook object
    if (editBook.authors && editBook.authors.length > 0) {
      editBook.authors[0] = this.selectedAuthor;
    } else {
      // If the authors array is empty or not defined, create a new array and add the selected author
      editBook.authors = [this.selectedAuthor];
    }

    editBook.publisher = this.selectedPublisher;
    editBook.language = this.selectedLanguage;

    this.bookService.update(editBook).subscribe({
      next: (updatedBook) => {
        console.log('Book updated successfully:', updatedBook);
      },
      error: (error) => {
        console.error('Error updating book:', error);
      },
    });
  }
}
