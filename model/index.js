const { v4 } = require("uuid");
const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

const updateContacts = async (newProducts) => {
  await fs.writeFile(contactsPath, JSON.stringify(newProducts));
};

const listContacts = async () => {
  const data = await fs.readFile("./model/contacts.json");
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contact = contacts.find((item) => item.id.toString() === contactId.toString());
  if (!contact) {
    return null;
  }
  return contact;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => item.id === contactId);
  if (idx === -1) {
    return null;
  }
  const newContacts = contacts.filter((item) => item.id !== contactId);
  await updateContacts(newContacts);
  return contactId;
};

const addContact = async (body) => {
  const contacts = await listContacts();
  const newContact = { ...body, id: v4() };
  const newContacts = [...contacts, newContact];
  await updateContacts(newContacts);
  return newContact;
};

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => item.id === contactId);
  if (idx === -1) {
    return null;
  }
  const updateContact = { ...contacts[idx], ...body };
  contacts[idx] = updateContact;
  await updateContacts(contacts);
  return updateContact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
