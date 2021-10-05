const { NotFound } = require("http-errors");
const { sendSuccessRes } = require("../../helpers");
const { Contact } = require("../../models");

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const userId = req.user.id;
  const result = await Contact.findByIdAndDelete({ _id: contactId, owner:userId });
  if (!result) {
    throw new NotFound( `Contact with id=${contactId} not found`);
  }
  sendSuccessRes(res, { message: "Success delete" });
};

module.exports = deleteContact;
