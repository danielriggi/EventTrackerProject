package com.skilldistillery.booktracker.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.Locale.Category;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

class BookTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Book book;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	    emf = Persistence.createEntityManagerFactory("JPABookTracker");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	    emf.close();
	}
	
	@BeforeEach
	void setUp() throws Exception {
	    em = emf.createEntityManager();
	    book = em.find(Book.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		book = null;
	    em.close();
	}
	
	
	@Test
	void test_Category_entity_mapping() {
		assertNotNull(book);
		assertEquals("bible", book.getTitle());
	}


}
