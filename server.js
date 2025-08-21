require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors'); 

//add note Routes
const noteRoutes = require('./routes/noteRoutes');
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');

// Middleware
app.use(cors());
app.use(express.json());

// database Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB connection error:', err));


  // Enable CORS for all routes
app.use(cors());

// Or configure specific origins and options
app.use(cors({
  origin: [
    'http://localhost:5173', 
    'http://localhost:3000',
    'https://ai-notes-management-api-production.up.railway.app/'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));


// Routes
app.use('/api/notes', noteRoutes);
app.use('/api/auth',  authRoutes )

// default route
app.get('/', (req, res) => {
  res.send('Notes Management API server running perfectly.Its totally FREE and you can test it or create some projects by consuming');
});

app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Notes Management API server running perfectly on  port ${PORT}`);
  
}); 
