const mongoose = require('mongoose')

const projectLoopSchema = new mongoose.Schema ({
    loop: [
        {
            name: {
                type: String,
                require: true,
            },
            bannerLink: {
                type: String,
                require: true,
            },
            url: {
                type: String,
                require: true,
            },
            liveLink: {
                type: String,
                require: true,
            },
            githubLink: {
                type: String,
                require: true,
            },
            summary: {
                type: String,
                require: true,
            },
            description: [],
            techStack: [],
        }
    ]

}, {timestamps: true})



module.exports = mongoose.model("ProjectLoop", projectLoopSchema)