// index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const taskRoutes = require('./routes/taskRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());

// Initialize Passport middleware
app.use(passport.initialize());

// Initialize JWT Strategy
require('./middleware/passport')(passport);

mongoose.connect('mongodb://localhost/taskmanager', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api/tasks', taskRoutes);
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
