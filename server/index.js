const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const blogRoute = require('./routes/blogRoutes');
const userRoute = require('./routes/userRoutes');

const app = express();
app.use(express.json());

const db = process.env.MONGO_URI;

mongoose
  .connect(db)
  .then(() => console.log('💻 Mondodb Connected'))
  .catch((err) => console.error(err));

app.get('/', (req, res) => {
  res.send('Server working 🔥');
});

app.use('/api/v1/blogs', blogRoute);
app.use('/api/v1/users', userRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port port ${port}🔥`);
