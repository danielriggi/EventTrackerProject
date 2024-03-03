import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { SearchFilterPipe } from '../../pipes/search-filter.pipe';
import { Author } from '../../models/author';
import { Book } from '../../models/book';
import { Language } from '../../models/language';
import { Publisher } from '../../models/publisher';
import { Router } from '@angular/router';
import { AuthorService } from '../../services/author.service';
import { BookService } from '../../services/book.service';
import { LanguageService } from '../../services/language.service';
import { PublisherService } from '../../services/publisher.service';

@Component({
  selector: 'app-book-add',
  standalone: true,
  imports: [MatSelectModule,
            CommonModule,
            FormsModule,
            SearchFilterPipe,
  ],
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css'
})
export class BookAddComponent {
  addBook: Book = new Book();
  selectedAuthor: Author = new Author();
  selectedLanguage: Language = new Language();
  selectedPublisher: Publisher = new Publisher();
  authors: Author[] = [];
  languages: Language[] = [];
  publishers: Publisher[] = [];
  searchText: string = '';
  createSuccess : boolean = false;



  constructor(
    private authorService: AuthorService,
    private languageService: LanguageService,
    private publisherService: PublisherService,
    private bookService: BookService,
    private searchFilterPipe: SearchFilterPipe,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAuthor();
    this.loadLanguage();
    this.loadPublisher();
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

  createBook(addBook: Book): void {
    // Update the first author of the editBook object
    if (addBook.authors && addBook.authors.length > 0) {
      addBook.authors[0] = this.selectedAuthor;
    } else {
      // If the authors array is empty or not defined, create a new array and add the selected author
      addBook.authors = [this.selectedAuthor];
    }

    addBook.publisher = this.selectedPublisher;
    addBook.language = this.selectedLanguage;

    this.bookService.create(addBook).subscribe({
      next: (addedBook) => {
        console.log('Book added successfully:', addedBook);
        this.createSuccess = true;
      },
      error: (error) => {
        console.error('Error adding book:', error);
      },
    });
  }

}
