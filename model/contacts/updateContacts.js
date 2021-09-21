const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "../../db/contacts.json");
const updateContacts = async (newProducts) => {
  await fs.writeFile(contactsPath, JSON.stringify(newProducts));
};

module.exports = updateContacts;