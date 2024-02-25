package com.skilldistillery.booktracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.booktracker.entities.Language;

public interface LanguageRepository extends JpaRepository <Language, Long>{

}
