import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  filters: {
    title: string;
    author: string;
    numPages: number;
    language: string;
    minPages: number;
    maxPages: number;
    // Add more filter options as needed
  };

  constructor(
    private bookService: BookService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.filters = {
      title: '',
      author: '',
      numPages: 0,
      language: '',
      minPages: 0,
      maxPages: 0,
      // Initialize more filter options as needed
    };
  }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.bookService.index().subscribe({
      next: (books) => {
        this.books = books;
        this.filteredBooks = this.books;
      },
      error: (problem) => {
        console.error('BookListHttpComponent.reload(): error loading books:');
        console.error(problem);
      },
    });
  }

  deleteBook(id: number): void {
    // Find the index of the book to be deleted in the array
    const index = this.filteredBooks.findIndex((book) => book.id === id);
    // Remove the book from the filteredBooks array
    if (index !== -1) {
      this.filteredBooks.splice(index, 1); // Remove the book from the filteredBooks array
    }

    this.bookService.destroy(id).subscribe({
      next: () => {
        console.log('Book deleted successfully');
        // Display a snackbar message indicating successful deletion
        this.snackBar.open('Book deleted successfully', 'Close', {
          duration: 2000, // Duration for which the message will be displayed
        });

        this.load();
      },
      error: (error) => {
        console.error(
          'BookListHttpComponent.deleteTodo(): error deleting book:'
        );
        console.error(error);
      },
    });
  }

  updateBook(id: number): void {
    this.router.navigate(['update', id]);
  }

  applyFilters(): void {
    this.filteredBooks = this.books.filter((book) => {
      return (
        (!this.filters.title ||
          book.title
            .toLowerCase()
            .includes(this.filters.title.toLowerCase())) &&
        (!this.filters.author ||
          book.authors.some((author) =>
            author.name
              .toLowerCase()
              .includes(this.filters.author.toLowerCase())
          )) &&
        (!this.filters.language ||
          book.language.name
            .toLowerCase()
            .includes(this.filters.language.toLowerCase())) &&
        (!this.filters.minPages || book.numPages >= this.filters.minPages) &&
        (!this.filters.maxPages || book.numPages <= this.filters.maxPages)
      );
    });
    console.log('applying filters...');
  }
}
