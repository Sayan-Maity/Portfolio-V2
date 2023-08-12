const AchievementModel = require("../models/AchievementModel")

// GET
module.exports.getAchievement = async (req, res) => {
    const achievement = await AchievementModel.find()
    res.status(201).send(achievement)

}