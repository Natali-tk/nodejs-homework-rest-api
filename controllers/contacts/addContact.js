const { sendSuccessRes } = require("../../helpers");
const { Contact } = require("../../models");

const addContact = async (req, res) => {
  const userId = req.user.id;
  const result = await Contact.create({ owner: userId, ...req.body });
  sendSuccessRes(res, { result }, 201);
};

module.exports = addContact;
