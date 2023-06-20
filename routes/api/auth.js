const express = require('express');
const { validateBody, authenticate } = require("../../middlewares");
const { registerSchemaJoi, loginSchemaJoi, subscriptionSchemaJoi } = require("../../models/user");
const ctrl = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(registerSchemaJoi), ctrl.register);
router.post("/login", validateBody(loginSchemaJoi), ctrl.login);
router.post("/current", authenticate, ctrl.getCurrent);
router.post("/logout", authenticate, ctrl.logout);
router.patch("/subscription", authenticate, validateBody(subscriptionSchemaJoi), ctrl.subscription);


module.exports = router;
