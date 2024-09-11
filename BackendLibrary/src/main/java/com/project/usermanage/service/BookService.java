package com.project.usermanage.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.usermanage.entity.Book;
import com.project.usermanage.entity.User;
import com.project.usermanage.repository.BookRepository;
import com.project.usermanage.repository.UserRepository;

@Service
@Transactional
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public List<Book> addBook(Book book) {
        bookRepository.save(book);
        return getAllBooks();
    }

    public Optional<Book> getBookById(Long id) {
        return bookRepository.findById(id);
    }

    public Optional<Book> editDetails(Book book, Long id) {
        Book bookOld = getBookById(id).orElseThrow(() -> new RuntimeException("Book not found"));
        bookOld.setAuthor(book.getAuthor());
        bookOld.setTitle(book.getTitle());
        bookOld.setCategory(book.getCategory());
        bookOld.setCopies(book.getCopies());
        bookOld.setCopiesAvailable(book.getCopiesAvailable());
        bookOld.setImg(book.getImg());
        bookRepository.save(bookOld);
        return getBookById(id);
    }

    public void deleteBook(Long id) {
        if (!bookRepository.existsById(id)) {
            throw new RuntimeException("Book not found");
        }
        bookRepository.deleteById(id);
    }

    public boolean borrowBook(String email, Long bookId) {
        User user = userRepository.findByEmail(email)
            .orElseThrow(() -> new RuntimeException("User not found"));

        Book book = bookRepository.findById(bookId)
            .orElseThrow(() -> new RuntimeException("Book not found"));
            int availableCopies = book.getCopiesAvailable();
            System.out.println("Available Copies Before Borrow: " + availableCopies);
            String result ="";
        if (availableCopies <= 0) {
            result=result + "No available copies for this book";
            return false;
        }
            book.setCopiesAvailable(book.getCopiesAvailable() - 1);
            user.getBooks().add(book.getTitle());
            userRepository.save(user);
            bookRepository.save(book);
            return true; 
    }

}
