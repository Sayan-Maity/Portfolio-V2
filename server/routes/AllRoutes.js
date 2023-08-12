const express = require("express")
const router = express.Router()
const { getExperience } = require("../controllers/ExperienceController")
const { getEducation } = require("../controllers/EducationController")
const { getAchievement } = require("../controllers/AchievementController")
const { getCertification } = require("../controllers/CertificationController")
const { getVolunteer } = require("../controllers/VolunteeringController")
const { postContactForm, getContactForm } = require("../controllers/ContactFormController")
const { getOpenSource } = require("../controllers/OpenSourceController")
const { getSocialLink } = require("../controllers/SocialLinkController")
const { getProjectLoop } = require("../controllers/ProjectLoopController")


// Landing Page
router.get("/getEducation", getEducation)
router.get("/getAchievement", getAchievement)

// Experience Page
router.get("/getExperience", getExperience)
router.get("/getCertification", getCertification)
router.get("/getVolunteer", getVolunteer)
router.get("/getOpenSource", getOpenSource)

// Contact Page
router.get("/getContactForm", getContactForm)
router.post("/postContactForm", postContactForm)

// Project Page
router.get("/getProjectLoop", getProjectLoop)

// Others
router.get("/getSocialLink", getSocialLink)



module.exports = router