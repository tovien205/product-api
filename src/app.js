const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware parse JSON
app.use(express.json());

// Healthcheck endpoint theo đề bài
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Routes
app.use('/api/products', productRoutes);

// Route mặc định
app.get('/', (req, res) => {
  res.send('Product RESTful API is running...');
});

module.exports = app;