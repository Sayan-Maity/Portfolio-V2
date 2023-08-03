const express = require("express")
const router = express.Router()
const { getExperience } = require("../controllers/ExperienceController")



router.get("/getExperience", getExperience)



module.exports = router