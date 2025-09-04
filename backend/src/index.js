require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { connectDB } = require('./config/database');

const authRoutes = require('./routes/auth');
const citizenRoutes = require('./routes/citizens');
const claimRoutes = require('./routes/claims');
const titleRoutes = require('./routes/titles');
const schemeRoutes = require('./routes/schemes');
const gramSabhaRoutes = require('./routes/gramSabha');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/citizens', citizenRoutes);
app.use('/api/claims', claimRoutes);
app.use('/api/titles', titleRoutes);
app.use('/api/schemes', schemeRoutes);
app.use('/api/gram-sabha', gramSabhaRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`FRA backend running on port ${PORT}`);
});