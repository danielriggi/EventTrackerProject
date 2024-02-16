package com.skilldistillery.booktracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.booktracker.entities.Book;
import com.skilldistillery.booktracker.services.BookService;

@RequestMapping("api")
@RestController
public class BookController {
	@Autowired
	private BookService bookService;
	
	@GetMapping("books")
	public List<Book> index() {
		return bookService.index();
	}
}
