const mongoose = require("mongoose");


const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    feathers: [{
        type: String,
        required: true,
    }],
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    validated: {
        type: Boolean,
        default: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    },{
    timestamps: true,
});

module.exports = mongoose.model("Course", courseSchema);
    