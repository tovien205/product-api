global.crypto = require('crypto');

require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 3000;

// 1. Cho Express lắng nghe cổng trên '0.0.0.0' để Docker ánh xạ cổng 3000 ra ngoài
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

// 2. Bọc hàm connectDB để retry nếu gặp lỗi DNS/CSDL, tránh crash ứng dụng
const startDB = async () => {
  try {
    await connectDB();
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    console.log('Retrying connection in 3 seconds...');
    setTimeout(startDB, 3000);
  }
};

startDB();