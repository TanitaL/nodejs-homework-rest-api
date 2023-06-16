const express = require('express');
// const Joi = require("joi");
const contacts = require("../../controllers/contacts");
// const { HttpError } = require("../../helpers");

const router = express.Router();

// const addScheme = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().required(),
//   phone: Joi.string().required(),
// });

router.get('/', async (req, res, next) => {
  try {
    const contactsList = await contacts.listContacts();
    res.status(200).json(contactsList);
  }
  catch (error) {
    next(error)
  }
})

// router.get('/:id', async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const contactById = await contacts.getContactById(id);
//     if (!contactById) {
//       throw HttpError(404, "Not found");
//     }
//     res.status(200).json(contactById)
//   }
//   catch (error) {
//     next(error)
//   }
// })

// router.post('/', async (req, res, next) => {
//   try {
//     const { error } = addScheme.validate(req.body);
//     if (error) {
//       throw HttpError(400, error.message);
//     }
//     const addContact = await contacts.addContact(req.body)
//     res.status(201).json(addContact);
//   }
//   catch (error) {
//     next(error)
//   }
// })

// router.delete('/:id', async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const deleteContactByID = await contacts.removeContact(id);
//     if (!deleteContactByID) {
//       throw HttpError(404, "Not found");
//     }
//     res.status(200).json({"message": "contact deleted"});
//   }
//   catch (error) {
//     next(error)  
//   }
  
// })

// router.put('/:id', async (req, res, next) => {
//   try {
//     const { error } = addScheme.validate(req.body);
//     if (error) {
//       throw HttpError(400, error.message);
//     }
//     const { id } = req.params;
//     const updatedContact = await contacts.updateContact(id, req.body);
//     if (!updatedContact) {
//       throw HttpError(404, "Not found");
//     }
//     res.status(200).json(updatedContact);
//   }
//   catch (error) {
//     next(error)
//   }
// })

module.exports = router;
