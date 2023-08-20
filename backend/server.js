const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const port = 5000;
const app = express();
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');


connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/posts', require('./routes/postRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);
app.listen(port, () => console.log(`Server started on port ${port}`));