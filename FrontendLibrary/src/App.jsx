import React from 'react'
import BookList from './components/BookList/BookList'
import LoginForm from './components/Login/LoginForm'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import BookDetails from './components/BookDetails/BookDetails';
import Bookupdate from './components/UpdateBook/Bookupdate';

function App() {
  return (
    <Router>
    <div className="App">
    <Header/>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/books" element={<BookList/>}/>
        <Route path="/books/:id" element={<BookDetails/>}/>
        <Route path="/updateBook/:id?" element={<Bookupdate/>}/>
      </Routes>
    </div>
  </Router>
  )
}

export default App