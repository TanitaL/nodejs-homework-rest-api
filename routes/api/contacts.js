const express = require('express');
const ctrl = require("../../controllers/contacts");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { schemaJoi, updateFavoriteSchema } = require('../../models/contact');

const router = express.Router();

router.get("/", authenticate, ctrl.listContacts);
router.post("/", authenticate, validateBody(schemaJoi), ctrl.addContact);
router.get("/:id", authenticate, isValidId, ctrl.getContactById);
router.put("/:id", authenticate, isValidId, validateBody(schemaJoi), ctrl.updateContact);
router.patch("/:id/favorite", authenticate, isValidId, validateBody(updateFavoriteSchema), ctrl.updateStatusContact);
router.delete("/:id", authenticate, isValidId, ctrl.removeContact);


module.exports = router;
