const express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');

const blogRoute = require('./routes/blogRoutes');
const userRoute = require('./routes/userRoutes');
const authRoute = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ limit: '50mb' }));

const db = process.env.MONGO_URI;

mongoose
  .connect(db)
  .then(() => console.log('💻 Mondodb Connected'))
  .catch((err) => console.error(err));

app.get('/', (req, res) => {
  res.send('Server working 🔥');
});

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/blogs', blogRoute);
app.use('/api/v1/users', userRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port port ${port}🔥`);
