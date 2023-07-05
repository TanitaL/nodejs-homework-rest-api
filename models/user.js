const { Schema, model } = require("mongoose");
const Joi = require("joi");

// eslint-disable-next-line no-useless-escape
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
      minlength: 6,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: emailRegex,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: String,
    avatarURL: {
      type: String,
      required: true,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", (error, data, next) => {
  const { name, code } = error;
  const status = name === "mongoServerError" && code === 11000 ? 409 : 400;
  error.status = status;
  next();
});

const registerSchemaJoi = Joi.object({
  password: Joi.string()
    .messages({ "any.required": "missing field - password" })
    .required(),
  email: Joi.string()
    .messages({ "any.required": "missing field - email" })
    .required(),
  subscription: Joi.string().valid("starter", "pro", "business"),
  token: Joi.string(),
});

const emailSchema = Joi.object({
  email: Joi.string()
    .messages({ "any.required": "missing field - email" })
    .required(),
});

const loginSchemaJoi = Joi.object({
  email: Joi.string().pattern(emailRegex).required(),
  password: Joi.string().required(),
});

const subscriptionSchemaJoi = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business").required(),
});

const User = model("user", userSchema);

module.exports = {
  User,
  registerSchemaJoi,
  emailSchema,
  loginSchemaJoi,
  subscriptionSchemaJoi,
};
