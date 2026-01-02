const bcrypt = require('bcrypt');
const userModel = require('../models/user.model');

exports.register = async (req, res) => {
    try {
        const { email, password, fullName, phoneNumber } = req.body;

        const userExists = await userModel.findOne({ email })

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({
            email,
            password: hashedPassword,
            fullName,
            phoneNumber
        })

        return res.status(201).json({
            message: 'User registered successfully',
            user: newUser
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}