package com.skilldistillery.booktracker.services;

import java.util.List;

import com.skilldistillery.booktracker.entities.Book;

public interface BookService {
	List<Book> index();
	
	Book findById(int id);
	
	Book create(Book book);
	
	boolean delete(int id);
	
	List<Book> findByLanguageName(String name);

	List<Book> findByAuthorName(String name);
	
	List<Book> findByPublisherName(String name);
	
	List<Book> findByTitle(String title); 
}
