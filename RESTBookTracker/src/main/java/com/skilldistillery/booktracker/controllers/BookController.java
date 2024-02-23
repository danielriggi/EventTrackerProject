package com.skilldistillery.booktracker.controllers;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.booktracker.entities.Book;
import com.skilldistillery.booktracker.services.BookService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RequestMapping("api")
@RestController
public class BookController {
	@Autowired
	private BookService bookService;

	@GetMapping({ "books", "books/" })
	public List<Book> index() {
		return bookService.index();
	}

	@GetMapping("books/{id}")
	public Book findBookById(@PathVariable("id") int id, HttpServletRequest request, HttpServletResponse response) {
		Book book = bookService.findById(id);
		if (book == null) {
			response.setStatus(404);
		}
		return book;
	}

	@PostMapping("books")
	public Book create(@RequestBody Book book, HttpServletRequest request, HttpServletResponse response) {
		Book newBook = bookService.create(book);
		if (newBook == null) {
			response.setStatus(409);
			return null;
		} else {
			response.setStatus(201);
			response.setHeader("Location", request.getRequestURL().append("/").append(newBook.getId()).toString());
			return newBook;
		}
	}

	@DeleteMapping("books/{id}")
	public void delete(@PathVariable("id") int id, HttpServletRequest request, HttpServletResponse response) {
		try {
			if (bookService.delete(id)) {
				response.setStatus(204);
			} else {
				response.setStatus(404);
			}
		} catch (Exception e) {
			response.setStatus(400);
			e.printStackTrace();
		}
	}

	@GetMapping("books/search/language/{name}")
	public List<Book> findByLanguageName(@PathVariable("name") String name, HttpServletRequest request,
			HttpServletResponse response) {
		List<Book> books = bookService.findByLanguageName(name);
		if (books == null) {
			response.setStatus(404);
		}
		return sortBooksByTitle(books);
	}

	@GetMapping("books/search/author/{name}")
	public List<Book> findByAuthorName(@PathVariable("name") String name, HttpServletRequest request,
			HttpServletResponse response) {
		List<Book> books = bookService.findByAuthorName(name);
		if (books == null) {
			response.setStatus(404);
		}
		return sortBooksByTitle(books);
	}

	@GetMapping("books/search/publisher/{name}")
	public List<Book> findByPublisherName(@PathVariable("name") String name, HttpServletRequest request,
			HttpServletResponse response) {
		List<Book> books = bookService.findByPublisherName(name);
		if (books == null) {
			response.setStatus(404);
		}
		return sortBooksByTitle(books);
	}

	@GetMapping("books/search/title/{title}")
	public List<Book> findByTitle(@PathVariable("title") String title, HttpServletRequest request,
			HttpServletResponse response) {
		List<Book> books = bookService.findByTitle(title);
		if (books == null) {
			response.setStatus(404);
		}
		return sortBooksByTitle(books);

	}

	private List<Book> sortBooksByTitle(List<Book> books) {
		if (books == null) {
			return null;
		}
		return books.stream().sorted(Comparator.comparing(Book::getTitle)).collect(Collectors.toList());
	}
}




























