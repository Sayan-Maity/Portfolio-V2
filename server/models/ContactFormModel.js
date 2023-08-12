const mongoose = require('mongoose')


const contactForm = new mongoose.Schema ({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    subject: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    message: {
        type: String,
        require: true,
    },

}, {timestamps: true})



module.exports = mongoose.model("ContactForm", contactForm)