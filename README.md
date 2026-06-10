# E-Commerce Platform

## Overview

A full-stack E-Commerce Platform built using Spring Boot, MySQL, HTML, CSS, and JavaScript.

The project is designed to provide an online marketplace where customers can browse products, register accounts, and purchase items while sellers can manage their products and inventory.

---

## Technology Stack

### Backend

* Java 17
* Spring Boot
* Spring Security
* Spring Data JPA
* Maven

### Database

* MySQL

### Frontend

* HTML5
* CSS3
* JavaScript

### Tools

* VS Code
* Git
* GitHub
* MySQL Workbench

---

## Current Features

### Backend

* Spring Boot project setup
* REST API foundation
* MySQL database integration
* JPA and Hibernate configuration
* User entity creation
* User repository implementation
* Authentication controller setup
* Security configuration
* Database connectivity testing

### Frontend

* Homepage UI
* Navigation bar
* Search bar
* Customer Login page
* Customer Registration page
* Seller Login page
* Responsive styling using CSS

---

## Project Structure

```text
ecommerce-platform
│
├── backend
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com.ecommerce.backend
│   │   │   │       ├── controller
│   │   │   │       ├── model
│   │   │   │       ├── repository
│   │   │   │       ├── SecurityConfig.java
│   │   │   │       └── BackendApplication.java
│   │   │   └── resources
│   │   │       └── application.properties
│   │   └── test
│   │
│   ├── pom.xml
│   ├── mvnw
│   └── mvnw.cmd
│
├── frontend
│   ├── home.html
│   ├── login.html
│   ├── register.html
│   ├── seller-login.html
│   ├── style.css
│   └── app.js
│
└── docs
```

---

## Database

Database Name:

```sql
ecommerce_db
```

Current Table:

```sql
user
```

### User Entity Fields

| Field    | Type   |
| -------- | ------ |
| id       | Long   |
| name     | String |
| email    | String |
| password | String |

---

## Available Pages

### Homepage

* Search Bar
* Customer Login Navigation
* Seller Login Navigation
* Featured Products Section

### Authentication Pages

* Customer Login
* Customer Registration
* Seller Login

---

## Running the Project

### Backend

```bash
cd backend
./mvnw spring-boot:run
```

Application URL:

```text
http://localhost:8080
```

### Frontend

Open `home.html` using Live Server.

---

## Upcoming Features

* Login API
* Password Encryption
* JWT Authentication
* Product Management
* Shopping Cart
* Wishlist
* Order Management
* Seller Dashboard
* Admin Dashboard
* Payment Integration

---

## Author

Ranga Sai