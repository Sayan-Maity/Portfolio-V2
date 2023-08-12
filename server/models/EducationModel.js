const mongoose = require('mongoose')


const educationSchema = new mongoose.Schema ({
    name: {
        type: String,
        require: true,
    },
    degree: {
        type: String,
        require: true,
    },
    grade: {
        type: String,
        require: true,
    },
    websiteLink: {
        type: String,
        require: true,
    },
    major: {
        type: String,
        require: true,
    },
    skills: [],
    activities: [],
    educationDetails : [],
    startDate: {
        type: String,
        require: true,
    },
    endDate: {
        type: String,
        require: true,
    },

}, {timestamps: true})



module.exports = mongoose.model("Education", educationSchema)