const { ctrlWrapper, HttpError } = require("../helpers");
const { Contact } = require("../models/contact");


const listContacts = async (req, res) => {
  const { _id: owner } = req.user;

  const { page=1, limit=20, favorite } = req.query;
  const skip = (page - 1) * limit;

  const contactsList = await Contact.find(
    favorite? { owner, favorite } : {owner}, "-createAt -updateAt", { skip, limit }).populate("owner", "email");
  
  res.json(contactsList);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const answer = await Contact.findById(id);
  if (!answer) {
    throw HttpError(404);
  }
  res.json(answer);
};

const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "Contact deleted" });
};

const addContact = async (req, res) => {
  const { _id: owner } = req.user;
  const newContact = await Contact.create({ ...req.body, owner });
  res.status(201).json(newContact);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};


module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  removeContact: ctrlWrapper(removeContact),
  addContact: ctrlWrapper(addContact),
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact)
}
