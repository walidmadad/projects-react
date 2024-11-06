const express = require('express');
const MenuItem = require('../models/MenuItem');
const router = express.Router();

// Récupérer le menu
router.get('/', async (req, res) => {
    try {
        const items = await MenuItem.find();
        res.json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération du menu' });
    }
});

// Ajouter un élément au menu (pour admin uniquement)
router.post('/', async (req, res) => {
    const { name, description, price, category, image } = req.body;
    try {
        const newItem = new MenuItem({ name, description, price, category, image });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'élément au menu' });
    }
});

module.exports = router;
