"# LibraryApp" 
# Library Management Application

This is a full-stack web application built with **Spring Boot** and **React**. The app allows users to add, update, delete, and borrow books. It uses **JWT (JSON Web Token)** for secure authentication and authorization.

## Features

- **Add, Update, Delete Books**
- **Borrow Books** 
- **JWT Authentication**

## Technologies Used

- **Backend**: Spring Boot, Spring Security, JWT, MySQL
- **Frontend**: React, Axios, React Router, CSS

## Getting Started

### Prerequisites
- Java 17+
- Node.js
- MySQL
- Maven

### Backend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/libraryapp.git
    cd libraryapp
    ```
2. Configure database in `application.properties`.
3. Run the backend:
    ```bash
    mvn spring-boot:run
    ```

### Frontend Setup
1. Navigate to the frontend folder:
    ```bash
    cd frontend
    ```
2. Install dependencies and start the app:
    ```bash
    npm install
    npm run dev
    ```
