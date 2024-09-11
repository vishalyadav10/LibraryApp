import React, { useEffect, useState } from 'react';
import { Bookbyid, borrowBook, deletebook, updatebook } from '../../Services/BookServices';
import { useNavigate, useParams } from 'react-router-dom';
import './BookDetails.css';

function BookDetails() {
  const [book, setBook] = useState(null);
  const token = localStorage.getItem('token');
  const email =localStorage.getItem('name');
  const { id } = useParams();
  const navigate =useNavigate();
  useEffect(() => {
    fetchBookDetails(); 
  }, []);

  function fetchBookDetails() { 
    Bookbyid(token, id).then((response) => {
      setBook(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.error("Error fetching book details:", error);
    });
  }
  function bookupdate(id){
    navigate(`/updateBook/${id}`)
  }
  function rentBook(id){
    borrowBook(token,id,email).then((response) => {
      alert(response.data);
    })
  }

  async function deletebookbyid(id){
    await deletebook(token, id);
    navigate('/books');
  }


  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-details">
      <div className="book-details-content">
        <div className="book-info">
          <h2>Title: {book.title}</h2>
          <p>Author: {book.author}</p>
          <p> Description: {book.description}</p>
          <p>Total Copies: {book.copies}</p>
          <p>Copies available: {book.copiesAvailable}</p>
          <p>Category: {book.category}</p>
        </div>
        <div className="book-img">
          {book.img && <img src={book.img} alt={book.title} />}
        </div>
      </div>
      <div className="book-button">
        <button onClick={() => bookupdate(book.id)}>Update</button>
        <button onClick={() => deletebookbyid(book.id)}>Delete</button>
        <button onClick={()=> rentBook(book.id)}>Rent</button>
      </div>
    </div>
  );
}

export default BookDetails;
