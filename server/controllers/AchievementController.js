const AchievementModel = require("../models/AchievementModel");

// GET
module.exports.getAchievement = async (req, res) => {
  const achievement = await AchievementModel.find();
  res.status(201).send(achievement);
};

// POST
module.exports.postAchievement = async (req, res) => {
    const { detail, link } = req.body;
  try {
    const saveAchivement = new AchievementModel({
        detail,
        link
    }).save()
    
    res.status(201).send(saveAchivement);
  } catch (err) {
    console.log("Error =>", err);
  }
};
