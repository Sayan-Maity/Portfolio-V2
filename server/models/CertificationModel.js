const mongoose = require('mongoose')


const certificationschema = new mongoose.Schema ({
    name: {
        type: String,
        require: true,
    },
    imageLink: {
        type: String,
        require: true,
    },
    company: {
        type: String,
        require: true,
    },
    certificateLink: {
        type: String,
        require: true,
    },

}, {timestamps: true})



module.exports = mongoose.model("Certification", certificationschema)