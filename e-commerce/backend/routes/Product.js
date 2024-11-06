const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Ajouter un produit
router.post('/', async (req, res) => {
    const { name, description, price, imageUrl, category, stock } = req.body;

    try {
        const newProduct = new Product({ name, description, price, imageUrl, category, stock });
        await newProduct.save();
        res.status(201).json({ message: 'Product created successfully', product: newProduct });
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error });
    }
});

// Récupérer tous les produits
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
});

module.exports = router;
