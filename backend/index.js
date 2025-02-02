const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
// require('dotenv').config(); // .env 파일에서 환경 변수를 불러옵니다.
// const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = 'your_secret_key';

const users = [];

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// MongoDB 연결
// const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/mydatabase';
// mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

// route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });

  res.status(201).send('User registered');
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  
  if (!user) {
    return res.status(400).send('Invalid username or password');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).send('Invalid username or password');
  }

  const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });

  res.json({ token });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
