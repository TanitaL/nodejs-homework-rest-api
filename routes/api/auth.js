const express = require('express');
const { validateBody } = require("../../middlewares");
const { registerSchemaJoi, loginSchemaJoi } = require("../../models/user");
const ctrl = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(registerSchemaJoi), ctrl.register);
router.post("/login", validateBody(loginSchemaJoi), ctrl.login);

module.exports = router;
