package com.skilldistillery.booktracker.entities;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

class AuthorTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Author author;

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
	    author = em.find(Author.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		author = null;
	    em.close();
	}
	
	
	@Test
	void test_Author_entity_mapping() {
		assertNotNull(author);
		assertEquals("J.K. Rowling", author.getName());
	}
	
	@Test
	void test_Author_Book_Bidirectional_ManyToMany_relationship_mapping() {
		assertNotNull(author.getBooks());
		assertTrue(author.getBooks().size() >= 1);
	}
}
