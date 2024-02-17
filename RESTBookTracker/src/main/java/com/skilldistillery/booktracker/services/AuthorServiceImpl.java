package com.skilldistillery.booktracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.booktracker.entities.Author;
import com.skilldistillery.booktracker.repositories.AuthorRepository;

@Service
public class AuthorServiceImpl implements AuthorService {
	@Autowired
	AuthorRepository authorRepo;
	
	@Override
	public List<Author> index() {
		return authorRepo.findAll();
	}

	@Override
	public Author findById(int id) {
		return authorRepo.findById(id).orElse(null);
	}
	
	
	@Override
	public Author create(Author author) {
		Author existingAuthor = authorRepo.findByName(author.getName());
		if (existingAuthor != null) {
			return null;
		}
		return authorRepo.save(author);
	}
	
	@Override
	public boolean delete(int id) {
		Author author = authorRepo.findById(id).orElse(null);
		boolean deleted = false;
		if (author != null) {
			authorRepo.deleteById(id);
			deleted = true;
		}
		return deleted;

	}

	@Override
	public List<Author> findByName(String name) {
		return authorRepo.findByNameIgnoreCaseContaining(name);
	}

	@Override
	public List<Author> findByBookTitle(String title) {
		return authorRepo.findByBooks_TitleIgnoreCaseContaining(title);
	}

}
