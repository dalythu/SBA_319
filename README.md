# ZooDB API

A Node.js + Express + MongoDB API for managing zoo animals, employees, and exhibits.

## Setup

1. Install dependencies:
   npm install

2. Create a `.env` file with your MongoDB connection string:
   MONGO_URI=your_mongodb_connection_string

3. Start the server:
   npm run dev

4. Seed the database:
   npm run seed

## API Routes

Base URL: http://localhost:3000

### Animals

Create an animal  
POST /api/animal

Get all animals  
GET /api/animal

Get one animal by id  
GET /api/animal/:id

Update an animal by id  
PUT /api/animal/:id

Delete an animal by id  
DELETE /api/animal/:id

### Employees

Create an employee  
POST /api/employee

Get all employees  
GET /api/employee

Get one employee by id  
GET /api/employee/:id

Update an employee by id  
PUT /api/employee/:id

Delete an employee by id  
DELETE /api/employee/:id

### Exhibits

Create an exhibit  
POST /api/exhibit

Get all exhibits  
GET /api/exhibit

Get one exhibit by id  
GET /api/exhibit/:id

Update an exhibit by id  
PUT /api/exhibit/:id

Delete an exhibit by id  
DELETE /api/exhibit/:id
