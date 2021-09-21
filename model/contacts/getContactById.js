const listContacts = require("./listContacts");

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contact = contacts.find(
    (item) => item.id.toString() === contactId.toString()
  );
  if (!contact) {
    return null;
  }
  return contact;
};
module.exports = getContactById;
