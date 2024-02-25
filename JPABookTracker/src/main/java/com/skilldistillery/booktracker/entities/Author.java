package com.skilldistillery.booktracker.entities;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;

@Entity
public class Author {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

//    @JsonIgnoreProperties({"authors"})
//	@ManyToMany
//	@JoinTable(name="book_author",
//			   joinColumns=@JoinColumn(name="book_id"),
//			   inverseJoinColumns=@JoinColumn(name="author_id")
//	)
//	private List<Book> books;
    
    @JsonIgnoreProperties({"authors"})
    @ManyToMany(mappedBy = "authors")
    private List<Book> books;

    // Getters and setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

	public List<Book> getBooks() {
		return books;
	}

	public void setBooks(List<Book> books) {
		this.books = books;
	}
	
	
	public void addBook(Book book) {
		if(books == null) {books = new ArrayList<>();}
		if(!books.contains(book)) {
			books.add(book);
			book.addAuthor(this);
		}
	}
	
	public void removeBook(Book book) {
		if (books != null && books.contains(book) ) {
			books.remove(book);
			book.removeAuthor(this);
		}
	}
	

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Author other = (Author) obj;
		return Objects.equals(id, other.id);
	}

	@Override
	public String toString() {
		return "Author [id=" + id + ", name=" + name + "]";
	}
    
    
}
