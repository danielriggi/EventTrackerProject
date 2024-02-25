package com.skilldistillery.booktracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.booktracker.entities.Publisher;
import com.skilldistillery.booktracker.repositories.PublisherRepository;

@Service
public class PublisherServiceImpl implements PublisherService {

	@Autowired
	PublisherRepository publisherRepo;

	@Override
	public List<Publisher> index() {
		return publisherRepo.findAll();
	}
}
