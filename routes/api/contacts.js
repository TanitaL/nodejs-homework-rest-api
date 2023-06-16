const express = require('express');
const ctrl = require("../../controllers/contacts");
const { validateBody, isValidId } = require("../../middlewares");
const { schemaJoi, updateFavoriteSchema } = require('../../models/contact');

const router = express.Router();

router.get("/", ctrl.listContacts);
router.post("/", validateBody(schemaJoi), ctrl.addContact);
router.get("/:id", isValidId, ctrl.getContactById);
router.put("/:id", isValidId, validateBody(schemaJoi), ctrl.updateContact);
router.patch("/:id/favorite", isValidId, validateBody(updateFavoriteSchema), ctrl.updateStatusContact);
router.delete("/:id", isValidId, ctrl.removeContact);


module.exports = router;
