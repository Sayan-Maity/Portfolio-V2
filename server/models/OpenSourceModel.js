const mongoose = require("mongoose");

const openSourceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      default: "",
    },
    logoLink: {
      type: String,
      require: true,
      default: "",
    },
    startDate: {
      type: String,
      require: true,
      default: "",
    },
    endDate: {
      type: String,
      require: true,
      default: "",
    },
    detail: [
      {
        individualName: {
          type: String,
          required: true,
          default: "",
        },
        individualStartDate: {
          type: String,
          required: true,
          default: "",
        },
        description: [],
        techStack: [],
        links: [
          {
            repoLink: {
              type: String,
              required: true,
            },
            contributionLink: {
              type: String,
              required: true,
            },
            certificateLink: {
              type: String,
              required: true,
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("OpenSource", openSourceSchema);
