package com.skilldistillery.booktracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.booktracker.entities.Publisher;
import com.skilldistillery.booktracker.services.PublisherService;

@CrossOrigin({"*", "http://localhost/"})
@RequestMapping("api")
@RestController
public class PublisherController {

	@Autowired PublisherService publisherService;
	
	@GetMapping({ "publishers", "publishers/" })
	public List<Publisher> index() {
	    List<Publisher> publishers = publisherService.index();
	    return publishers;
	}
}	

