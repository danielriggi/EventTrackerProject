package com.skilldistillery.booktracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.booktracker.entities.Author;
import com.skilldistillery.booktracker.entities.Book;
import com.skilldistillery.booktracker.services.AuthorService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RequestMapping("api")
@RestController
public class AuthorController {
	@Autowired
	private AuthorService authorService;
	
	@GetMapping({ "authors", "authors/" })
	public List<Author> index() {
		return authorService.index();
	}
	
	@GetMapping("authors/{id}")
	public Author findAuthorById(@PathVariable("id") int id, HttpServletRequest request, HttpServletResponse response) {
		Author author = authorService.findById(id);
		if (author == null) {
			response.setStatus(404);
		}
		return author;
	}
	
	@PostMapping("authors")
	public Author create(@RequestBody Author author, HttpServletRequest request, HttpServletResponse response) {
		Author newAuthor = authorService.create(author);
		if (newAuthor == null) {
			response.setStatus(409);
			return null;
		} else {
			response.setStatus(201);
			response.setHeader("Location", request.getRequestURL().append("/").append(newAuthor.getId()).toString());
			return newAuthor;
		}
	}
	
	@DeleteMapping("authors/{id}")
	public void delete(@PathVariable("id") int id, 
			HttpServletRequest request,
			HttpServletResponse response) {
		try {
			if (authorService.delete(id)) {
				response.setStatus(204);
			} else {
				response.setStatus(404);
			}
		} catch (Exception e) {
			response.setStatus(400);
			e.printStackTrace();
		}
	}
	
	@GetMapping("authors/search/{name}")
	public List<Author> findAuthorName(@PathVariable("name") String name,  HttpServletRequest request, HttpServletResponse response) {
		List<Author> authors = authorService.findByName(name);
		if (authors == null) {
			response.setStatus(404);
		}
		return authors;
	}
	
	@GetMapping("authors/search/books/{title}")
	public List<Author> findByBookTitle(@PathVariable("title") String title,  HttpServletRequest request, HttpServletResponse response) {
		List<Author> authors = authorService.findByBookTitle(title);
		if (authors == null) {
			response.setStatus(404);
		}
		return authors;
	}
	

}




















