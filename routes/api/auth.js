const express = require("express");
const { validateBody, authenticate, upload } = require("../../middlewares");
const {
  registerSchemaJoi,
  loginSchemaJoi,
  subscriptionSchemaJoi,
  emailSchema,
} = require("../../models/user");
const ctrl = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(registerSchemaJoi), ctrl.register);
router.get("/verify/:verificationToken", ctrl.verifyEmail);
router.post("/verify", validateBody(emailSchema), ctrl.resendVerifyEmail);

router.post("/login", validateBody(loginSchemaJoi), ctrl.login);
router.post("/current", authenticate, ctrl.getCurrent);
router.post("/logout", authenticate, ctrl.logout);
router.patch(
  "/subscription",
  authenticate,
  validateBody(subscriptionSchemaJoi),
  ctrl.subscription
);
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
