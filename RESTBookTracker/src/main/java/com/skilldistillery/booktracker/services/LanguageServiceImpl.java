package com.skilldistillery.booktracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.booktracker.entities.Language;
import com.skilldistillery.booktracker.repositories.LanguageRepository;

@Service
public class LanguageServiceImpl implements LanguageService {

		@Autowired
		LanguageRepository languageRepo;
		
		@Override
		public List<Language> index() {
			return languageRepo.findAll();
		}
}
