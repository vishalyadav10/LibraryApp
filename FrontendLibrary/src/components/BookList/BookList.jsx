import React, { useEffect, useState } from 'react';
import { listBooks } from '../../Services/BookServices';
import './BookList.css'; 
import BookDetails from '../BookDetails/BookDetails';
import { useNavigate } from 'react-router-dom';

function BookList() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null); 

  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  useEffect(() => {
    getAllBooks();
  }, []);

  function getAllBooks() {
    listBooks(token).then((response) => {
      setBooks(response.data);
    }).catch((error) => {
      setError('Failed to fetch books');
    });
  }
  function BookDetails(id){
    console.log(id);
    navigate(`/books/${id}`)
  }
  function bookadd(){
    navigate('/updateBook')
  }
  return (
    <div className="book-list-container">
      <h1>Book List</h1>
       <button onClick={() => bookadd()}> Add New book </button>
      {error && <p>{error}</p>}
      {books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <li className ="booklist" key={book.id} onClick={() => BookDetails(book.id)}>
              <div>
                <h2>{book.title}</h2>
                <p>{book.author}</p>
                <p>{book.description}</p>
                <p>Category: {book.category}</p>
              </div>
              {book.img && <img src={book.img} alt={book.title} />}
            </li>
          ))}
        </ul>
      ) : (
        <p>No books available</p>
      )}
    </div>
  );
}

export default BookList;
