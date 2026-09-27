global.crypto = require('crypto');

require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

// Kết nối CSDL MongoDB
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});