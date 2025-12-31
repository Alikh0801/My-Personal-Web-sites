const bcrypt = require('bcrypt')
const User = require('../models/User')

const register = async (req, res) => {
    const { email, password } = req.body;

    const hashed = await bcrypt.hash(password, 10)
    const user = await User.create({
        email,
        password,
        hashed
    });

    res.status(201).json({
        message: "User registered successfully",
        id: user._id,
        email: user.email
    })
}