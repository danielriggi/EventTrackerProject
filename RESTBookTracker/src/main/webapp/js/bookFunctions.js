window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
});


function init() {
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
	book.authorsList.forEach(author => {
		let authorItem = document.createElement("li");
		authorItem.textContent = author;
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

function clearUL(parentDiv) {
	for (let i = 0; i < parentDiv.childNodes.length; i++) {
		let childNode = parentDiv.childNodes[i];
		if (childNode.nodeName === 'UL') {
			parentDiv.removeChild(childNode);
		}
	}
}














