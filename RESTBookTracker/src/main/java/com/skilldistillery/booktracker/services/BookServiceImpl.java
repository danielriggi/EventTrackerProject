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
		// TODO Auto-generated method stub
		return bookRepo.findAll();
	}

	
}
