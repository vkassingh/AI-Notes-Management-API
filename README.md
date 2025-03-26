# Notes Management API 📝📒

A simple API for managing notes with CRUD operations.

## ⚡Features
- Create, read, update, and delete notes
- Search functionality
- User authentication (optional)
- RESTful design

## ⚡ Prerequisites
- Node.js (v23)
- npm 
- MongoDB Atlas for cloud database
- Git

## ⚡Installation
### 1. Clone the repository:

``` bash
git clone https://github.com/yourusername/notes-management-api.git ```
cd notes-management-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables:
Create a .env file in the root directory with the following variables.
Add the PORT and MONGODB_URI

### 4. Run the Application
```bash
npm start or 
node server.js
```

#### The API will be available at http://localhost:5000

### ⚡How to Test the API
Create a Note
curl -X POST http://localhost:5000/api/notes \
-H "Content-Type: application/json" \
-d '{"title": "First Note", "content": "Hello world!"}'

Get a Note
curl http://localhost:5000/api/notes/<note-id>

Get all Notes
curl http://localhost:5000/api/notes

Update a Note
curl -X PUT http://localhost:5000/api/notes/<note-id> \
-H "Content-Type: application/json" \
-d '{"title": "Updated Title", "content": "New content"}'

Delete a Note
curl -X DELETE http://localhost:5000/api/notes/<note-id>





### 5. Database Setup
Install MongoDB locally or use MongoDB Atlas
Update the MONGODB_URI in your .env file

The API will automatically create collections when first used
