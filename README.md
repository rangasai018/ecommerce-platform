# E-Commerce Platform

## Overview

This project is a full-stack E-Commerce Platform designed to provide a seamless online shopping experience for customers while offering product management capabilities for sellers and administrators.

The platform aims to support product browsing, user authentication, shopping cart management, order processing, seller operations, and administrative controls.

---

## Objectives

* Build a scalable e-commerce platform.
* Provide secure user authentication and authorization.
* Enable customers to browse and purchase products.
* Allow sellers to manage products and inventory.
* Provide administrative controls for monitoring platform activities.
* Integrate modern web technologies and database management.

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

### Development Tools

* VS Code
* Git
* GitHub
* MySQL Workbench

---

## Current Features

### Backend Features

#### Application Setup

* Spring Boot project configuration
* Maven dependency management
* REST API architecture

#### Database Integration

* MySQL database connection
* JPA configuration
* Hibernate ORM integration

#### User Management

* User entity creation
* User repository implementation
* User data persistence

#### Authentication Foundation

* Registration endpoint
* Security configuration
* API structure for future authentication implementation

---

### Frontend Features

#### Home Page

* Navigation bar
* Search bar
* Customer login navigation
* Seller login navigation
* Featured products section

#### Authentication Pages

* Login page
* Registration page

#### Styling

* Responsive layout
* Modern user interface design
* Reusable CSS structure

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
│   ├── style.css
│   └── app.js
│
└── docs
```

---

## Database Configuration

### Database

```sql
ecommerce_db
```

### Current Tables

```sql
user
```

### User Table Fields

| Field    | Type   |
| -------- | ------ |
| id       | Long   |
| name     | String |
| email    | String |
| password | String |

---

## API Endpoints

### Home Endpoint

```http
GET /
```

Response:

```text
E-commerce Backend Running 🚀
```

### Register User

```http
POST /auth/register
```

Request Body:

```json
{
  "name": "Sai",
  "email": "sai@gmail.com",
  "password": "1234"
}
```

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

Open:

```text
frontend/home.html
```

Or run using Live Server.

---

## Planned Features

### Authentication

* Login API
* BCrypt Password Encryption
* JWT Authentication
* Role-Based Authorization

### Customer Features

* Product Search
* Product Filtering
* Shopping Cart
* Wishlist
* Checkout Process
* Order History

### Seller Features

* Seller Registration
* Product Upload
* Inventory Management
* Sales Dashboard

### Admin Features

* User Management
* Seller Management
* Product Monitoring
* Analytics Dashboard

### Advanced Features

* AI Chatbot
* Product Recommendation System
* Review and Rating System
* Email Notifications
* Payment Gateway Integration

---

## Future Scope

The platform can be expanded into a production-ready marketplace supporting multiple sellers, secure payment processing, intelligent recommendations, and advanced analytics.

---

## Author

Ranga Sai