require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors'); 

//add note Routes
const noteRoutes = require('./routes/noteRoutes');


// Middleware
app.use(cors());
app.use(express.json());

// database Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/notes', noteRoutes);

// default route
app.get('/', (req, res) => {
  res.send('Notes Management API server running perfectly.Its totally FREE and you can test it or create some projects by consuming');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Notes Management API server running perfectly on  port ${PORT}`);
  
});
