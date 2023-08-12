const SocialLinkModel = require("../models/SocialLinkModel")

// GET
module.exports.getSocialLink = async (req, res) => {
    const socialLink = await SocialLinkModel.find()
    res.status(201).send(socialLink)

}