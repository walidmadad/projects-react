const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Créer une commande
router.post('/', async (req, res) => {
    const { userId, items } = req.body;
    const totalPrice = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    const order = new Order({ userId, items, totalPrice });
    await order.save();
    res.status(201).json(order);
});

// Récupérer les commandes d'un utilisateur
router.get('/user/:userId', async (req, res) => {
    const orders = await Order.find({ userId: req.params.userId });
    res.json(orders);
});

module.exports = router;
