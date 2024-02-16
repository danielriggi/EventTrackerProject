package com.skilldistillery.booktracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.booktracker.entities.Book;

public interface BookRepository extends JpaRepository <Book, Integer>{

}
