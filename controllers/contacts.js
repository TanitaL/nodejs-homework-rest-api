const Contact = require("../models/contact");
// const { nanoid } = require("nanoid");



const listContacts = async (req, res) => {
  const contactsList = await Contact.find();
  res.json(contactsList);
}

// const getContactById = async (id) => {
//   const contacts = await listContacts();
//   const contactById = contacts.find(contact => contact.id === id);
//   return contactById;
// }

// const removeContact = async (id) => {
//   const contacts = await listContacts();
//   const index = contacts.findIndex(item => item.id === id);

//   if (index === -1) {
//     return null;
//   }

//   const [result] = contacts.splice(index, 1);
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return result;
// }

// const addContact = async ({ name, email, phone }) => {
//   const contacts = await listContacts();

//   const newContact = {
//     id: nanoid(),
//     name,
//     email,
//     phone
//   };

//   contacts.push(newContact);
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return newContact; 
// }

// const updateContact = async (id, { name, email, phone }) => {
//   const contacts = await listContacts();
//   const index = contacts.findIndex(item => item.id === id);

//   if (index === -1) {
//     return null;
//   }

//   contacts[index] = {
//     id,
//     name,
//     email,
//     phone
//   };
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return contacts[index];
// }

module.exports = {
  listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact
}
