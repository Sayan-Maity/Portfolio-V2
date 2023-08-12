const EducationModel = require("../models/EducationModel")

// GET
module.exports.getEducation = async (req, res) => {
    const education = await EducationModel.find()
    res.status(201).send(education)

}