const ExperienceModel = require("../models/ExperienceModel")

// GET
module.exports.getExperience = async (req, res) => {
    const experiences = await ExperienceModel.find()
    res.status(201).send(experiences)

}