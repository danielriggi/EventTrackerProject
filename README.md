<a title="Donatas Dabravolskas, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Real_Gabinete_Portugu%C3%AAs_de_Leitura_10.jpg"><img width="512" alt="Real Gabinete Português de Leitura 10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Real_Gabinete_Portugu%C3%AAs_de_Leitura_10.jpg/512px-Real_Gabinete_Portugu%C3%AAs_de_Leitura_10.jpg"></a>
# EventTrackerProject

## Description
REST API to access a database with over 9,200 authors and 11,100 books. This documentation outlines the available API endpoints and their functionalities for accessing the book and author database. A front end exists at the base url that allows easy access to select endpoints. 


## Base URL
http://52.44.132.108:8080/RESTBookTracker/

## Book Endpoints



| #   | Action                    | URL                               | Method | Description                                       | Parameters          | Response                                                                                       |
| --- | ------------------------- | --------------------------------- | ------ | ------------------------------------------------- | --------------------| ---------------------------------------------------------------------------------------------- |
| 1   | Get All Books             | `/api/books`                      | GET    | Retrieves a list of all books in the database.   | None                | Status Code: `200 OK`<br>Body: JSON array containing book objects with details such as id, title, ISBN, number of pages, publication date, language, and publisher. |
| 2   | Get Book by ID            | `/api/books/{id}`                 | GET    | Retrieves a specific book by its ID.             | `{id}`: ID of the book to retrieve. | Status Code: `200 OK`<br>Body: JSON object containing details of the requested book.<br>Status Code: `404 Not Found` if the book with the specified ID does not exist. |
| 3   | Add New Book              | `/api/books`                      | POST   | Adds a new book to the database.                 | JSON object containing details of the new book. | Status Code: `201 Created` if the book is successfully added.<br>Body: JSON object containing details of the newly added book, including its unique identifier. |
| 4   | Update Book              | `/api/books/{id}`                      | Put   | Update a book in the database                 | JSON object containing details of the updated book. | Status Code: `200 Created` if the book is successfully udpated.<br>Body: JSON object containing details of the newly updated book, including its unique identifier. |
| 5   | Delete Book by ID         | `/api/books/{id}`                 | DELETE | Deletes a specific book by its ID from the database. | `{id}`: ID of the book to delete. | Status Code: `204 No Content` if the book is successfully deleted.<br>Status Code: `404 Not Found` if the book with the specified ID does not exist. |
| 6   | Find Books by Title       | `/api/books/search/title/{title}` | GET    | Retrieves a list of books based on the title.    | `{title}`: title to search for. | Status Code: `200 OK` if books are found.<br>Status Code: `404 Not Found` if no books are found for the specified title.<br>Body: JSON object containing details of the books. |
| 7   | Find Books by Language    | `/api/books/search/language/{name}` | GET | Retrieves a list of books based on the language name. | `{name}`: Language name to search for. | Status Code: `200 OK` if books are found.<br>Status Code: `404 Not Found` if no books are found for the specified language name.<br>Body: JSON object containing details of the books. |
| 8   | Find Books by Author      | `/api/books/search/author/{name}` | GET    | Retrieves a list of books based on the author name. | `{name}`: Author name to search for. | Status Code: `200 OK` if books are found.<br>Status Code: `404 Not Found` if no books are found for the specified author.<br>Body: JSON object containing details of the books. |
| 9   | Find Books by Publisher   | `/api/books/search/publisher/{name}` | GET | Retrieves a list of books based on the publisher name. | `{name}`: Publisher name to search for. | Status Code: `200 OK` if books are found.<br>Status Code: `404 Not Found` if no books are found for the specified publisher.<br>Body: JSON object containing details of the books. |

## Author Endpoints

| #   | Action                    | URL                               | Method | Description                                       | Parameters          | Response                                                                                       |
| --- | ------------------------- | --------------------------------- | ------ | ------------------------------------------------- | --------------------| ---------------------------------------------------------------------------------------------- |
| 1   | Get All Authors           | `/api/authors`                    | GET    | Retrieves a list of all authors in the database. | None                | Status Code: `200 OK`<br>Body: JSON array containing author objects with details such as id, name, and a list of books they've written. |
| 2   | Get Author by ID          | `/api/authors/{id}`               | GET    | Retrieves a specific author by its ID.           | `{id}`: ID of the author to retrieve. | Status Code: `200 OK`<br>Body: JSON object containing details of the requested author.<br>Status Code: `404 Not Found` if the author with the specified ID does not exist. |
| 3   | Add New Author            | `/api/authors`                    | POST   | Adds a new author to the database.               | JSON object containing details of the new author. | Status Code: `201 Created` if the author is successfully added.<br>Body: JSON object containing details of the newly added author, including its unique identifier. |
| 4   | Delete Author by ID       | `/api

## Language Endpoints

| #   | Action                    | URL                               | Method | Description                                       | Parameters          | Response                                                                                       |
| --- | ------------------------- | --------------------------------- | ------ | ------------------------------------------------- | --------------------| ---------------------------------------------------------------------------------------------- |
| 1   | Get All Languages           | `/api/languages`                    | GET    | Retrieves a list of all languages in the database. | None                | Status Code: `200 OK`<br>Body: JSON array containing language objects with details such as id, name. |

## Publisher Endpoints

| #   | Action                    | URL                               | Method | Description                                       | Parameters          | Response                                                                                       |
| --- | ------------------------- | --------------------------------- | ------ | ------------------------------------------------- | --------------------| ---------------------------------------------------------------------------------------------- |
| 1   | Get All Publishers          | `/api/publishers`                    | GET    | Retrieves a list of all publishers in the database. | None                | Status Code: `200 OK`<br>Body: JSON array containing publisher objects with details such as id, name. |
