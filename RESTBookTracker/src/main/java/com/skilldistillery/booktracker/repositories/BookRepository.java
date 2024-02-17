package com.skilldistillery.booktracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.booktracker.entities.Book;

public interface BookRepository extends JpaRepository <Book, Integer>{
	Book findByTitle(String title);
	Book findByIsbn(String isbn);
	List<Book> findByLanguage_NameIgnoreCase(String name);
	List<Book> findByAuthors_NameIgnoreCaseContaining(String name);
	List<Book> findByPublisher_NameIgnoreCaseContaining(String name);
	List<Book> findByTitleIgnoreCaseContaining(String name);
}
