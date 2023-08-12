const mongoose = require('mongoose')


const volunteerSchema = new mongoose.Schema ({
    name: {
        type: String,
        require: true,
    },
    logoLink: {
        type: String,
        require: true,
    },
    websiteLink: {
        type: String,
        require: true,
    },
    twitterLink: {
        type: String,
        require: true,
    },
    linkedinLink: {
        type: String,
        require: true,
    },
    detail: [],
    
}, {timestamps: true})



module.exports = mongoose.model("Volunteer", volunteerSchema)