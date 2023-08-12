const ProjectLoopModel = require("../models/ProjectLoopModel")

// GET
module.exports.getProjectLoop = async (req, res) => {
    const projectLoop = await ProjectLoopModel.find()
    res.status(201).send(projectLoop)

}