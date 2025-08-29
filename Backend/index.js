<<<<<<< HEAD
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const rateLimit = require("express-rate-limit");
const authenticateToken = require("./middlewares/authMiddleware");
=======
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const authenticateToken = require('./middlewares/authMiddleware');
const { swaggerUi, specs } = require('./swagger');
>>>>>>> 69b248f1f11d94270223cb8c3dc88cae87cb7f08

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
<<<<<<< HEAD
app.use(express.json({ limit: "10mb" }));
=======
// app.use(express.json({ limit: '10mb' }));

// Custom middleware to run express.json() only for applicable methods
app.use((req, res, next) => {
  if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
    express.json({ limit: '10mb' })(req, res, next);
  } else {
    next();
  }
});

>>>>>>> 69b248f1f11d94270223cb8c3dc88cae87cb7f08
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
<<<<<<< HEAD
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10000, // limit each IP to 100 requests per windowMs
});
app.use("/api", limiter, require("./routes")); // Apply rate limiting to API routes

// JWT Secret
const JWT_SECRET =
  process.env.JWT_SECRET || "your-secret-key-change-in-production";
=======
  windowMs: 15 * 60 * 1000, 
  max: 10000
});
app.use('/api', limiter, require('./routes')); 


// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'my-super-secret-jwt-key';

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

>>>>>>> 69b248f1f11d94270223cb8c3dc88cae87cb7f08

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal server error" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
