import { addProduct, addProductCart, deleteAll, deleteProduct, getProducts, getProductsCart, putProduct } from "../controllers/products.controller.js";

import { Router } from "express";

const router = Router();

router.get('/', getProducts);
router.get('/cart', getProductsCart);
router.post('/cart', addProductCart);
router.post('/', addProduct);
router.put('/cart/:id', putProduct);
router.delete('/cart/:id', deleteProduct);
router.delete('/cart', deleteAll);

export default router;