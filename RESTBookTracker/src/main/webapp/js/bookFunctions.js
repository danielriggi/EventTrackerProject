window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
});


function init() {
	getAllAuthors();

	document.bookTitleForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		let searchString = document.bookTitleForm.bookTitle.value;
		getBooksByTitle(searchString);

	});

	document.bookAuthorForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		let searchString = document.bookAuthorForm.bookAuthor.value;
		getBooksByAuthor(searchString);
	});

	document.bookPublisherForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		let searchString = document.bookPublisherForm.bookPublisher.value;
		getBooksByPublisher(searchString);

	});

	document.bookLanguageForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		let searchString = document.bookLanguageForm.bookLanguage.value;
		getBooksByLanguage(searchString);

	});

	document.authorSearchForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		let searchString = document.authorSearchForm.authorSearch.value;
		getAuthorsByName(searchString);

	});

	document.addBookForm.addBook.addEventListener('click', function(event) {
		event.preventDefault();
		createBook();

	});
}

function getBooksByTitle(searchString) {
	let xhr = new XMLHttpRequest();
	let route = 'api/books/search/title/' + searchString;
	console.log(route);
	xhr.open('GET', route);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status >= 200 && xhr.status < 300) {
				if (xhr.responseText.length > 0) {
					let data = JSON.parse(xhr.responseText);
					showBooks("collapseOne", data);
				}
			}
		}
	}
	xhr.send()
}


function getBooksByPublisher(searchString) {
	let xhr = new XMLHttpRequest();
	let route = 'api/books/search/publisher/' + searchString;
	console.log(route);
	xhr.open('GET', route);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status >= 200 && xhr.status < 300) {
				if (xhr.responseText.length > 0) {
					let data = JSON.parse(xhr.responseText);
					showBooks("collapseThree", data);
				}
			}
		}
	}
	xhr.send()
}

function getBooksByAuthor(searchString) {
	let xhr = new XMLHttpRequest();
	let route = 'api/books/search/author/' + searchString;
	console.log(route);
	xhr.open('GET', route);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status >= 200 && xhr.status < 300) {
				if (xhr.responseText.length > 0) {
					let data = JSON.parse(xhr.responseText);
					showBooks("collapseTwo", data);
				}
			}
		}
	}
	xhr.send()
}

function getBooksByLanguage(searchString) {
	let xhr = new XMLHttpRequest();
	let route = 'api/books/search/language/' + searchString;
	console.log(route);
	xhr.open('GET', route);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status >= 200 && xhr.status < 300) {
				if (xhr.responseText.length > 0) {
					let data = JSON.parse(xhr.responseText);
					showBooks("collapseFour", data);
				}
			}
		}
	}
	xhr.send()
}

function showBooks(parentDivId, books) {
	let parentDiv = document.getElementById(parentDivId);

	clearUL(parentDiv);

	let ul = document.createElement('ul');
	books.forEach((book, index) => {
		console.log(book);
		let li = document.createElement('li');
		let titleElement = document.createElement('button');
		titleElement.textContent = book.title;
		titleElement.classList.add('btn', 'btn-link');
		titleElement.style.textAlign = 'left';
		titleElement.id = parentDivId + "_" + index;
		titleElement.addEventListener('click', () => showBook(titleElement.id, book));
		li.appendChild(titleElement);
		ul.appendChild(li);
	});
	parentDiv.appendChild(ul);
}

function showBook(parentDivId, book) {
	console.log(book)
	let parentDiv = document.getElementById(parentDivId);

	if (parentDiv.children.length > 0) {
		clearUL(parentDiv);
		return;
	}

	let ul = document.createElement('ul');


	let authorsLi = document.createElement("li");
	authorsLi.textContent = "Authors: ";
	authorsLi.style.textAlign = 'left';
	let authorUl = document.createElement("ul");
	book.authors.forEach(author => {
		let authorItem = document.createElement("li");
		authorItem.textContent = author.name;
		authorItem.style.textAlign = 'left';
		authorUl.appendChild(authorItem);
	});
	authorsLi.appendChild(authorUl);
	ul.appendChild(authorsLi);


	let isbn = document.createElement("li");
	isbn.textContent = "ISBN: " + book.isbn
	isbn.style.textAlign = 'left';
	ul.appendChild(isbn);

	let numPages = document.createElement("li");
	numPages.textContent = "Number of Pages: " + book.numPages;
	numPages.style.textAlign = 'left';
	ul.appendChild(numPages);

	let pubDate = document.createElement("li");
	pubDate.textContent = "Publication Date: " + book.publicationDate;
	pubDate.style.textAlign = 'left';
	ul.appendChild(pubDate);

	let lang = document.createElement("li");
	lang.textContent = "Language: " + book.language.name;
	lang.style.textAlign = 'left';
	ul.appendChild(lang);

	let pub = document.createElement("li");
	pub.textContent = "Publisher: " + book.publisher.name;
	pub.style.textAlign = 'left';
	ul.appendChild(pub);

	parentDiv.appendChild(ul);
}

function getAllAuthors() {
	let xhr = new XMLHttpRequest();
	let route = 'api/authors';
	xhr.open('GET', route);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status >= 200 && xhr.status < 300) {
				if (xhr.responseText.length > 0) {
					let data = JSON.parse(xhr.responseText);
					console.log(data);
					populateAuthorForm("authorDropdown", data);
				}
			}
		}
	}
	xhr.send()
}

function populateAuthorForm(parentDivId, authors) {
	let selectElement = document.getElementById(parentDivId);
	console.log(selectElement);
	authors.forEach(author => {
		let option = document.createElement('option');
		option.textContent = author.name;

		option.value = author.id;
		selectElement.appendChild(option);
	});
}

function getAuthorsByName(searchString) {
	let xhr = new XMLHttpRequest();
	let route = 'api/authors/search/' + searchString;
	console.log(route);
	xhr.open('GET', route);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status >= 200 && xhr.status < 300) {
				if (xhr.responseText.length > 0) {
					let data = JSON.parse(xhr.responseText);
					showAuthors("collapseFive", data);
				}
			}
		}
	}
	xhr.send()
}

function showAuthors(parentDivId, authors) {
	let parentDiv = document.getElementById(parentDivId);

	clearUL(parentDiv);

	let ul = document.createElement('ul');
	authors.forEach((author, index) => {
		console.log(author);
		let li = document.createElement('li');
		let titleElement = document.createElement('button');
		titleElement.textContent = author.name;
		titleElement.classList.add('btn', 'btn-link');
		titleElement.style.textAlign = 'left';
		titleElement.id = parentDivId + "_" + index;
		titleElement.addEventListener('click', () => showAuthor(titleElement.id, author));
		li.appendChild(titleElement);
		ul.appendChild(li);
	});
	parentDiv.appendChild(ul);
}

function showAuthor(parentDivId, author) {
	console.log(author)
	let parentDiv = document.getElementById(parentDivId);

	if (parentDiv.children.length > 0) {
		clearUL(parentDiv);
		return;
	}

	let ul = document.createElement('ul');


	let booksLi = document.createElement("li");
	booksLi.textContent = "Books: ";
	booksLi.style.textAlign = 'left';
	let bookUl = document.createElement("ul");
	author.books.forEach(book => {
		let bookItem = document.createElement("li");
		bookItem.textContent = book.title;
		bookItem.style.textAlign = 'left';
		bookUl.appendChild(bookItem);
	});
	booksLi.appendChild(bookUl);
	ul.appendChild(booksLi);


	parentDiv.appendChild(ul);
}


function clearUL(parentDiv) {
	for (let i = 0; i < parentDiv.childNodes.length; i++) {
		let childNode = parentDiv.childNodes[i];
		if (childNode.nodeName === 'UL') {
			parentDiv.removeChild(childNode);
		}
	}
}

function getAuthorByID(id) {
	let xhr = new XMLHttpRequest();
	let route = 'api/authors/' + id;
	xhr.open('GET', route);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status >= 200 && xhr.status < 300) {
				if (xhr.responseText.length > 0) {
					let data = JSON.parse(xhr.responseText);
					return data;
				}
			}
		}
	}
	xhr.send()
}

function createBook() {

	let title = addBookForm.title.value;
	let author = {
		"id": addBookForm.authorDropdown.value,
		"name": addBookForm.authorDropdown.textContent
	};
	let isbn = addBookForm.isbn.value;
	let numPages = addBookForm.numPages.value;
	let pubDate = addBookForm.publicationDate.value;
	let language = addBookForm.language.value.trim() === "" ? null : addBookForm.language.value.trim();
	let publisher = addBookForm.publisher.value.trim() === "" ? null : addBookForm.publisher.value.trim();


	let bookObject = {

		title: title,
		isbn: isbn,
		numPages: numPages,
		publicationDate: pubDate,
		language: language,
		publisher: publisher,
		authors: [author]
	};



	let xhr = new XMLHttpRequest();
	let route = '/api/books';
	xhr.open('POST', route);
	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) {
				let data = JSON.parse(xhr.responseText);
				showBook("collapseSix", data);
			}
			else {
				console.error("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};

	xhr.send(JSON.stringify(bookObject))
}











