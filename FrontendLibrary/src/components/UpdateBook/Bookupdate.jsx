import React, { useEffect, useState } from 'react';
import { updatebook, Bookbyid, addBooks } from '../../Services/BookServices';
import './Bookupdate.css'
import { useNavigate, useParams } from 'react-router-dom';


function UpdateBook() {
  const { id } = useParams();
  const [book, setBook] = useState({
    title: '',
    author: '',
    description: '',
    copies: 0,
    category: '',
    img: ''
  });
  const token = localStorage.getItem('token');
  const [loading, setLoading] = useState(!!id);
  const [error, setError] = useState(null);
  const navigate =useNavigate();
  useEffect(() => {
    if (id){
      Bookbyid(token, id).then(response => {
        setBook(response.data);
        setLoading(false);
      }).catch(error => {
        setError('Error fetching book details');
        setLoading(false);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook(prevBook => ({ ...prevBook, [name]: value }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(id){
      updatebook(token, id, book).then(response => {
        alert('Book updated successfully!');
        navigate(`/books/${id}`)
      }).catch(error => {
        setError('Error updating book');
      });
    }
    else {
      addBooks(token,book).then(response => {
        alert('Book is Added');
        navigate(`/books`)
      }).catch(error => {
        setError('Error Adding book');
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>{id ? 'Update Book' : 'Add Book'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={book.title}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Author:
            <input
              type="text"
              name="author"
              value={book.author}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              name="description"
              value={book.description}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Copies:
            <input
              type="number"
              name="copies"
              value={book.copies}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Category:
            <input
              type="text"
              name="category"
              value={book.category}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Image URL:
            <input
              type="text"
              name="img"
              value={book.img}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">{id ? 'Update Book' : 'Add Book'}</button>
      </form>
    </div>
  );
}

export default UpdateBook;
