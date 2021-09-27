const { NotFound } = require("http-errors");
const { sendSuccessRes } = require("../../helpers");
const { Contact } = require("../../models");

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw new NotFound(404, `Contact with id=${contactId} not found`);
  }
  sendSuccessRes(res, { message: "Success delete" });
};

module.exports = deleteContact;
