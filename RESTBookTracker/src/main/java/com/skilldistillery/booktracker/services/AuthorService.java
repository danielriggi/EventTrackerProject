package com.skilldistillery.booktracker.services;

import java.util.List;

import com.skilldistillery.booktracker.entities.Author;

public interface AuthorService {
	List<Author> index();
	
	Author findById(int id);
	
	Author create(Author author);
	
	List<Author> findByName(String name);
	
	List<Author> findByBookTitle(String title);
	
	boolean delete(int id); 
}
