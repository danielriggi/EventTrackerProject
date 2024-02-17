package com.skilldistillery.booktracker.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

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
	void test_Book_entity_mapping() {
		assertNotNull(book);
		assertEquals("0439785960", book.getIsbn());
	}
	
	@Test
	void test_Book_Author_Bidirectional_ManyToMany_relationship_mapping() {
		assertNotNull(book.getAuthors());
		assertTrue(book.getAuthors().size() >= 1);
	}
	
	@Test
	void test_Book_Publisher_Bidirectional_ManyToOne_relationship_mapping() {
		assertNotNull(book.getPublisher());
		assertEquals("Scholastic Inc.", book.getPublisher().getName());
	}

	@Test
	void test_Book_Language_Bidirectional_ManyToOne_relationship_mapping() {
		assertNotNull(book.getLanguage());
		assertEquals("English", book.getLanguage().getName());
	}

}
















