const fs = require("fs").promises;
const listContacts = async () => {
  const data = await fs.readFile("./db/contacts.json");
  const contacts = JSON.parse(data);
  return contacts;
};

module.exports = listContacts;
