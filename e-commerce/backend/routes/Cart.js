const express = require('express');
const Cart = require('../models/Cart');
const router = express.Router();

// Ajouter un produit au panier
router.post('/:userId', async (req, res) => {
    const { userId } = req.params;
    const { product, quantity } = req.body;

    try {
        let cart = await Cart.findOne({ user: userId });

        if (!cart) {
            cart = new Cart({ user: userId, products: [] });
        }

        const existingProductIndex = cart.products.findIndex(p => p.product.toString() === product);
        if (existingProductIndex > -1) {
            cart.products[existingProductIndex].quantity += quantity;
        } else {
            cart.products.push({ product, quantity });
        }

        await cart.save();
        res.status(200).json({ message: 'Product added to cart', cart });
    } catch (error) {
        res.status(500).json({ message: 'Error adding product to cart', error });
    }
});

// Récupérer le panier d'un utilisateur
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const cart = await Cart.findOne({ user: userId }).populate('products.product');
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cart', error });
    }
});

module.exports = router;
