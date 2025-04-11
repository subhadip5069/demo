const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    referalCode: {
        type: String,
        unique: true
    },
    referedBy: {
        type: String,
        default: null
    },
    referedUser: {
        type: [String],
        default: []
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('User', schema)