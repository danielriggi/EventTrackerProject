package com.skilldistillery.booktracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.booktracker.entities.Author;

public interface AuthorRepository extends JpaRepository <Author, Integer>{
	Author findByName(String name);
	Author findByNameIgnoreCase(String name);
	List<Author> findByNameIgnoreCaseContaining(String name);
	List<Author> findByBooks_TitleIgnoreCaseContaining(String name);
}
