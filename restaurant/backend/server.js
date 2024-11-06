const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');  // CORS package

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// CORS configuration
app.use(cors({
    origin: '*',  // Autoriser toutes les origines
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));


// Connexion à la base de données
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connexion à la base de données réussie"))
    .catch((error) => console.log("Erreur de connexion à la base de données", error));

app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));

// Routes
const authRoutes = require('./routes/auth');
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/order');

app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);
