package com.skilldistillery.booktracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.booktracker.entities.Publisher;

public interface PublisherRepository extends JpaRepository <Publisher, Long>{ 

}
