const mongoose = require("mongoose");
const { randomUUID } = require("crypto");
const { generateUsername } = require("../../utils/common.util");

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.UUID,
      required: true,
      unique: true,
      default: () => randomUUID(),
    },
    userName: {
      type: mongoose.Schema.Types.String,
      required: true,
      unique: true,
      default: () => generateUsername(),
    },
    firstName: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    lastName: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    email: {
      type: mongoose.Schema.Types.String,
      required: true,
      unique: true,
    },
    profilePicture: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    phoneNumber: {
      type: mongoose.Schema.Types.String,
      required: false,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
