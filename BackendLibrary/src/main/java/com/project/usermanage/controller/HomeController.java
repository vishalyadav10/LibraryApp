package com.project.usermanage.controller;
import org.springframework.web.bind.annotation.RestController;
import com.project.usermanage.entity.Book;
import com.project.usermanage.entity.User;
import com.project.usermanage.service.BookService;
import com.project.usermanage.service.UserService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;



@RestController
@CrossOrigin("*")
public class HomeController {
    @Autowired
    private BookService bookService;
    @Autowired
    private UserService userService;
    @PostMapping("/addAdmin")
    public void add(@RequestBody User user) {
        userService.addUser(user);
    }
    @GetMapping("/books")
    public List<Book> getAllBooks(){
        return bookService.getAllBooks();
    }
    @PostMapping("/addBook")
    public List<Book> addNewBook(@RequestBody Book book){
        return bookService.addBook(book);
    }
    @GetMapping("/book/{id}")
    public Optional<Book> getBookById(@PathVariable Long id) {
        return bookService.getBookById(id);
    }
    @PutMapping("updatebook/{id}")
    public Optional<Book> updatebook(@PathVariable Long id, @RequestBody Book book) {
        return bookService.editDetails(book, id);
    }
    @DeleteMapping("/delete/{id}")
    public void deletebook(@PathVariable Long id){
        bookService.deleteBook(id);
    }
 
    @PostMapping("/borrow/{bookId}")
public String borrowBook(@RequestParam String email,@PathVariable Long bookId) {
    
        if(bookService.borrowBook(email, bookId)){
            return "Book borrowed successfully.";
        }
        else{
            return "Try next time";
        }
}
}
