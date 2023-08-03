const mongoose = require('mongoose')


const experienceSchema = new mongoose.Schema ({
    logoLink: {
        type: String,
        require: true,
    },
    logoName: {
        type: String,
        require: true,
    },
    companyName: {
        type: String,
        require: true,
    },
    companyLink: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        require: true,
    },
    position: {
        type: String,
        require: true,
    },
    experienceDetails : [],
    techStack: [],
    startDate: {
        type: String,
        require: true,
    },
    endDate: {
        type: String,
        require: true,
    },

}, {timestamps: true})



module.exports = mongoose.model("Experience", experienceSchema)