package com.skilldistillery.booktracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.booktracker.entities.Book;
import com.skilldistillery.booktracker.repositories.BookRepository;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	BookRepository bookRepo;

	@Override
	public List<Book> index() {
		return bookRepo.findAll();
	}

	@Override
	public Book findById(int id) {
		return bookRepo.findById(id).orElse(null);
	}

	@Override
	public Book create(Book book) {
		Book existingBook = bookRepo.findByIsbn(book.getIsbn());
		if (existingBook != null) {
			return null;
		}
		return bookRepo.save(book);
	}

	@Override
	public boolean delete(int id) {
		Book book = bookRepo.findById(id).orElse(null);
		boolean deleted = false;
		if (book != null) {
			bookRepo.deleteById(id);
			deleted = true;
		}
		return deleted;

	}
	
	@Override
	public List<Book> findByTitle(String title) {
		return bookRepo.findByTitleIgnoreCaseContaining(title);
	}

	@Override
	public List<Book> findByLanguageName(String name) {
		return bookRepo.findByLanguage_NameIgnoreCase(name);
	}

	@Override
	public List<Book> findByAuthorName(String name) {
		return bookRepo.findByAuthors_NameIgnoreCaseContaining(name);
	}
	
	@Override
	public List<Book> findByPublisherName(String name) {
		return bookRepo.findByPublisher_NameIgnoreCaseContaining(name);
	}
	
	
	
	
}
