const express = require('express');
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProductByPid,
  updateProductByPid,
  deleteProductByPid,
} = require('../controllers/productController');

router.route('/')
  .post(createProduct)
  .get(getProducts);

router.route('/:pid')
  .get(getProductByPid)
  .put(updateProductByPid)
  .delete(deleteProductByPid);

module.exports = router;