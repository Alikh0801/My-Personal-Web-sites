const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const User = require("../models/user.model");
const config = require("../config");


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                OK: false,
                message: "Email and password are required"
            });
        }

        const foundUser = await User.findOne({ email }).select("+password");

        if (!foundUser) {
            return res.status(401).json({
                OK: false,
                message: "Email or password is incorrect!"
            })
        }

        const isMatch = await bcrypt.compare(password, foundUser.password);
        if (!isMatch) {
            return res.status(401).json({
                OK: false,
                message: "Email or password is incorrect!"
            })
        }

        const accessToken = jwt.sign(
            { id: foundUser._id },
            config.secret_key,
            { expiresIn: "7d" })

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: config.node_env === "production",
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        res.status(200).json({
            OK: true,
            message: "User logged in successfully"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            OK: false,
            message: "Internal server error"
        });
    }
}

const register = async (req, res) => {
    try {
        const { email, password, firstName, lastName } = req.body;

        if (!email || !password || !firstName || !lastName) {
            return res.status(400).json({
                OK: false,
                message: "All fields are required"
            });
        }


        const userExists = await User.findOne({ email })

        if (userExists) {
            return res.status(400).json({
                OK: false,
                message: "E-mail already in use"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        })
        await user.save()

        res.status(201).json({
            OK: true,
            message: "User registered successfully",
            data: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            OK: false,
            message: "Internal server error"
        })
    }
}

module.exports = {
    login,
    register
}
