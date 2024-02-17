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

class LanguageTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Language lang;

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
	    lang = em.find(Language.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		lang = null;
	    em.close();
	}
	
	
	@Test
	void test_Language_entity_mapping() {
		assertNotNull(lang);
		assertEquals("English", lang.getName());
	}
	


}
