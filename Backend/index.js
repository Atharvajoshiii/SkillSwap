import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // Import `cors` to fix missing import
import skillSwapRoutes from './routes/userinforoute.js'; // Ensure correct import (default export)

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS for cross-origin requests

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URL).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', skillSwapRoutes);

// Start the server
const PORT = process.env.PORT || 3000; // Use PORT from environment variables if available
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
