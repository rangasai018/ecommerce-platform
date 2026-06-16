# E-Commerce Platform

## Overview

E-Commerce Platform is a full-stack web application built using Spring Boot, MySQL, HTML, CSS, and JavaScript. The project provides a foundation for an online shopping platform with customer, seller, and product management features.

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

* Spring Boot application setup
* REST API foundation
* MySQL database integration
* Hibernate ORM configuration
* User entity creation
* User repository implementation
* Authentication controller
* Security configuration

### Frontend

#### Home Page

* Navigation bar
* Search bar
* Customer Login navigation
* Seller Login navigation
* Shopping Cart navigation
* Hero banner section
* Product categories section
* Featured products section
* Product cards with images
* Clickable product navigation
* Product card hover effects
* Category card hover effects
* Add To Cart buttons
* Responsive layout
* Footer branding

#### Authentication Pages

* Customer Login page
* Customer Registration page
* Seller Login page

#### Product Pages

* Product Details page
* Product ratings
* Customer reviews section
* Related products section
* Product availability information
* Buy Now button

#### Cart Pages

* Shopping Cart page
* Checkout button
* Continue shopping navigation
* Total items display

#### JavaScript

* External JavaScript integration through app.js
* DOM content loaded event handling
* Search bar event detection
* Browser console logging

---

## Project Structure

```text
ecommerce-platform
│
├── backend
│   ├── src
│   ├── pom.xml
│   ├── mvnw
│   └── mvnw.cmd
│
├── frontend
│   ├── home.html
│   ├── login.html
│   ├── register.html
│   ├── seller-login.html
│   ├── product.html
│   ├── cart.html
│   ├── style.css
│   └── app.js
│
├── docs
│
├── README.md
│
└── LICENSE
```

---

## Database

### Database Name

```sql
ecommerce_db
```

### Current Table

```sql
user
```

### User Fields

| Field    | Type   |
| -------- | ------ |
| id       | Long   |
| name     | String |
| email    | String |
| password | String |

---

## Available Pages

### Home Page

* Home page
* Categories section
* Featured products
* Product cards

### Authentication

* Customer Login
* Customer Registration
* Seller Login

### Shopping

* Product Details Page
* Shopping Cart Page

---

## Running the Backend

```bash
cd backend
./mvnw spring-boot:run
```

Backend URL:

```text
http://localhost:8080
```

---

## Running the Frontend

Open with Live Server:

```text
frontend/home.html
```

Frontend URL:

```text
http://127.0.0.1:5500/frontend/home.html
```

---

## Planned Features

* User Login API
* User Registration API Integration
* Password Encryption
* JWT Authentication
* Product Management
* Dynamic Product Listing
* Shopping Cart Functionality
* Order Management
* Wishlist
* Seller Dashboard
* Admin Dashboard
* Payment Gateway Integration

---

## Author

Ranga Sai
