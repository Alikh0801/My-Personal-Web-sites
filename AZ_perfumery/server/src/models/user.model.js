const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true,
        select: false
    },
    refreshToken: {
        type: String,
        default: null
    },
    isActive: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
}, { timestamps: true });

userSchema.index({ email: 1 }, { unique: true });

const User = mongoose.model("User", userSchema);
module.exports = User;