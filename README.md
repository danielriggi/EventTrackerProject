<a title="Donatas Dabravolskas, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Real_Gabinete_Portugu%C3%AAs_de_Leitura_10.jpg"><img width="512" alt="Real Gabinete Português de Leitura 10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Real_Gabinete_Portugu%C3%AAs_de_Leitura_10.jpg/512px-Real_Gabinete_Portugu%C3%AAs_de_Leitura_10.jpg"></a>
# EventTrackerProject

## Description
REST API to access a database with over 9,200 authors and 11,100 books. This documentation outlines the available API endpoints and their functionalities for accessing the book and author database.

## Base URL
http://52.44.132.108:8080/RESTBookTracker/

## Book Endpoints

### 1. Get All Books

- **URL**: `/api/books`
- **Method**: `GET`
- **Description**: Retrieves a list of all books in the database.
- **Response**:
  - Status Code: `200 OK`
  - Body: JSON array containing book objects with details such as id, title, ISBN, number of pages, publication date, language, and publisher.

### 2. Get Book by ID

- **URL**: `/api/books/{id}`
- **Method**: `GET`
- **Description**: Retrieves a specific book by its ID.
- **Parameters**:
  - `{id}`: ID of the book to retrieve.
- **Response**:
  - Status Code: `200 OK`
  - Body: JSON object containing details of the requested book.
  - Status Code: `404 Not Found` if the book with the specified ID does not exist.

### 3. Add New Book

- **URL**: `/api/books`
- **Method**: `POST`
- **Description**: Adds a new book to the database.
- **Request Body**: JSON object containing details of the new book. 
    - **Sample JSON**:
    ```json 
        {
      "title": "Sample Book Title",
      "isbn": "000000000",
      "numPages": 300,
      "publicationDate": "2023-05-15",
      "authors": [
        {
          "id": 1
        }
      ],
     "language": 
        {
          "id": 1
        },
      "publisher": 
        {
          "id": 1
        }
    
    }
    ```
- **Response**:
  - Status Code: `201 Created` if the book is successfully added.
  - Body: JSON object containing details of the newly added book, including its unique identifier.

### 4. Delete Book by ID

- **URL**: `/api/books/{id}`
- **Method**: `DELETE`
- **Description**: Deletes a specific book by its ID from the database.
- **Parameters**:
  - `{id}`: ID of the book to delete.
- **Response**:
  - Status Code: `204 No Content` if the book is successfully deleted.
  - Status Code: `404 Not Found` if the book with the specified ID does not exist.
  
### 5. Find Books by Title

- **URL**: `/api/books/search/title/{title}`
- **Method**: `GET`
- **Description**: Retrieves a list of books based on the title.
- **Parameters**:
  - `{title}`: title to search for.
- **Response**:
  - Status Code: `200 OK` if books are found.
  - Status Code: `404 Not Found` if no books are found for the specified title.
 - Body: JSON object containing details of the books.

### 6. Find Books by Language

- **URL**: `/api/books/search/language/{name}`
- **Method**: `GET`
- **Description**: Retrieves a list of books based on the language name.
- **Parameters**:
  - `{name}`: Language name to search for.
- **Response**:
  - Status Code: `200 OK` if books are found.
  - Status Code: `404 Not Found` if no books are found for the specified language name.
 - Body: JSON object containing details of the books.

 ### 7. Find Books by Author

- **URL**: `/api/books/search/author/{name}`
- **Method**: `GET`
- **Description**: Retrieves a list of books based on the author name.
- **Parameters**:
  - `{name}`: Author name to search for.
- **Response**:
  - Status Code: `200 OK` if books are found.
  - Status Code: `404 Not Found` if no books are found for the specified author.
 - Body: JSON object containing details of the books.

  ### 7. Find Books by Publisher

- **URL**: `/api/books/search/publisher/{name}`
- **Method**: `GET`
- **Description**: Retrieves a list of books based on the publisher name.
- **Parameters**:
  - `{name}`: Publisher name to search for.
- **Response**:
  - Status Code: `200 OK` if books are found.
  - Status Code: `404 Not Found` if no books are found for the specified publisher.
 - Body: JSON object containing details of the books.


## Author Endpoints

### 1. Get All Authors

- **URL**: `/api/authors`
- **Method**: `GET`
- **Description**: Retrieves a list of all authors in the database.
- **Response**:
  - Status Code: `200 OK`
  - Body: JSON array containing author objects with details such as id, name, and a list of books they've written.

### 2. Get Author by ID

- **URL**: `/api/author/{id}`
- **Method**: `GET`
- **Description**: Retrieves a specific author by its ID.
- **Parameters**:
  - `{id}`: ID of the author to retrieve.
- **Response**:
  - Status Code: `200 OK`
  - Body: JSON object containing details of the requested author.
  - Status Code: `404 Not Found` if the author with the specified ID does not exist.

### 3. Add New Author

- **URL**: `/api/authors`
- **Method**: `POST`
- **Description**: Adds a new author to the database.
- **Request Body**: JSON object containing details of the new author. 
    - **Sample JSON**:
    ```json 
         {
        "name": "Test Author",
        "books": [
            {
            "id": 1000
            }  
                  ]
          }
    ```
- **Response**:
  - Status Code: `201 Created` if the author is successfully added.
  - Body: JSON object containing details of the newly added author, including its unique identifier.


  ### 4. Delete Author by ID

- **URL**: `/api/authors/{id}`
- **Method**: `DELETE`
- **Description**: Deletes a specific author by its ID from the database.
- **Parameters**:
  - `{id}`: ID of the author to delete.
- **Response**:
  - Status Code: `204 No Content` if the author is successfully deleted.
  - Status Code: `404 Not Found` if the author with the specified ID does not exist.
  
### 5. Find Authors by Name

- **URL**: `/api/authors/search/{name}`
- **Method**: `GET`
- **Description**: Retrieves a list of authors based on name.
- **Parameters**:
  - `{name}`: Author name to search for.
- **Response**:
  - Status Code: `200 OK` if authors are found.
  - Status Code: `404 Not Found` if no authors are found for the specified name.
 - Body: JSON object containing details of the authors.

 ### 5. Find Authors by Book

- **URL**: `/api/authors/search/books/{title}`
- **Method**: `GET`
- **Description**: Retrieves a list of authors based on book title.
- **Parameters**:
  - `{title}`: Book title to search for.
- **Response**:
  - Status Code: `200 OK` if authors are found.
  - Status Code: `404 Not Found` if no authors are found for the specified title.
 - Body: JSON object containing details of the authors.
