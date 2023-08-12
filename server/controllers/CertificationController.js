const CertificationModel = require("../models/CertificationModel")

// GET
module.exports.getCertification = async (req, res) => {
    const certification = await CertificationModel.find()
    res.status(201).send(certification)

}