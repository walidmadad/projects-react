const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Autoriser les requêtes depuis 'http://localhost:3000'
router.use(cors({
    origin: 'http://localhost:3000', // Remplacez cette URL par celle de votre frontend si nécessaire
    methods: 'GET,POST', // Méthodes autorisées
    credentials: true, // Autoriser les cookies si nécessaire
}));

// Inscription
router.post('/signup', async (req, res) => {
    const { firstName, lastName, email, password, dateOfBirth } = req.body;

    try {
        // Vérifier si l'email existe déjà dans la base de données
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Un utilisateur avec cet email existe déjà.' });
        }

        // Si l'email est disponible, on crée le nouvel utilisateur
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ firstName, lastName, email, password: hashedPassword, dateOfBirth });
        await newUser.save();

        res.status(201).json({ message: 'Utilisateur créé avec succès' });
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur:', error);
        res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur', error: error.message });
    }
});


// Connexion
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});

module.exports = router;
