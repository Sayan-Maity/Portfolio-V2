const mongoose = require('mongoose')


const achievementSchema = new mongoose.Schema ({
    detail: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        require: true,
        default: "/"
    },

}, {timestamps: true})



module.exports = mongoose.model("Achievement", achievementSchema)