const { NotFound } = require("http-errors");
const { sendSuccessRes } = require("../../helpers");
const { Contact } = require("../../models");

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const userId = req.user.id;
  const result = await Contact.findByIdAndUpdate(
    { _id: contactId, owner: userId },
    { ...req.body },
    { new: true }
  );
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
  sendSuccessRes(res, { result });
};

module.exports = updateContact;
