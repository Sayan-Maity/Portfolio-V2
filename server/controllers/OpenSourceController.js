const OpenSourceModel = require("../models/OpenSourceModel")

// GET
module.exports.getOpenSource = async (req, res) => {
    const openSource = await OpenSourceModel.find()
    res.status(201).send(openSource)

}