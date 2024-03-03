package com.skilldistillery.booktracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.booktracker.entities.Language;
import com.skilldistillery.booktracker.services.LanguageService;

@CrossOrigin({"*", "http://localhost/"})
@RequestMapping("api")
@RestController
public class LanguageController {
	@Autowired LanguageService languageService;
	
	@GetMapping({ "languages", "languages/" })
	public List<Language> index() {
	    List<Language> languages = languageService.index();
	    return languages;
	}
}
