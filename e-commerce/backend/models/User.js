const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
