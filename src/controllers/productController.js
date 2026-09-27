const Product = require('../models/Product');

// 1. POST /api/products - Tạo mới sản phẩm
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 2. GET /api/products - Lấy danh sách sản phẩm
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 3. GET /api/products/:pid - Lấy 1 sản phẩm theo pid
exports.getProductByPid = async (req, res) => {
  try {
    const product = await Product.findOne({ pid: req.params.pid });
    if (!product) {
      return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 4. PUT /api/products/:pid - Cập nhật sản phẩm theo pid
exports.updateProductByPid = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { pid: req.params.pid },
      req.body,
      { new: true, runValidators: true }
    );
    if (!product) {
      return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 5. DELETE /api/products/:pid - Xóa sản phẩm theo pid
exports.deleteProductByPid = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({ pid: req.params.pid });
    if (!product) {
      return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
    }
    res.status(200).json({ message: 'Đã xóa sản phẩm thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};