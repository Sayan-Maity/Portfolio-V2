const mongoose = require("mongoose");

const socialLinkSchema = new mongoose.Schema(
  {
    links: [
      {
        github: {
          type: String,
          require: true,
        },
      },
      {
        linkedin: {
          type: String,
          require: true,
        },
      },
      {
        twitter: {
          type: String,
          require: true,
        },
      },
      {
        instagram: {
          type: String,
          require: true,
        },
      },
      {
        facebook: {
          type: String,
          require: true,
        },
      },
      {
        medium: {
          type: String,
          require: true,
        },
      },
      {
        dev: {
          type: String,
          require: true,
        },
      },
      {
        linktree: {
          type: String,
          require: true,
          default: "",
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("SocialLink", socialLinkSchema);
