const router = require('express').Router();

const product = require('../controllers/products.controller');

router.get('/products',product.getProducts);
router.get('/products/:id',product.getProductById);
router.post('/products',product.createNewProduct);
router.delete('/products',product.deleteProductById);
router.put('/products',product.updateProduct);


module.exports = router;