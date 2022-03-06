const mongoose = require('mongoose');

const { Schema } = mongoose;

const cartSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        minlength: 0.99
    },
    quantity: {
        type: Number,
        default: 0
    }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;