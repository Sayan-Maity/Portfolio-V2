const ContactFormModel = require("../models/ContactFormModel")

// GET
module.exports.getContactForm = async (req, res) => {
    const contactForm = await ContactFormModel.find()
    res.status(201).send(contactForm)
}

// POST
module.exports.postContactForm = async (req, res) => {
    const {
        firstName,
        lastName,
        subject,
        email,
        message,
    } = req.body

    try {
        const contactForm = await ContactFormModel({
            firstName,
            lastName,
            subject,
            email,
            message,
        }).save()
        res.status(201).json(contactForm)
    }
    catch (err) {
        res.status(500).json("Error: ", err)
    }
    

}