const VolunteeringModel = require("../models/VolunteeringModel")

// GET
module.exports.getVolunteer = async (req, res) => {
    const volunteer = await VolunteeringModel.find()
    res.status(201).send(volunteer)

}