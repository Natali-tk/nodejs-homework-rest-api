const { Contact } = require("../../models");
const { NotFound } = require("http-errors");
const { sendSuccessRes } = require("../../helpers");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const userId = req.user.id;
  const result = await Contact.findById({_id:contactId, owner:userId }, "_id name email phone favorite");
  if (!result) {
    throw new NotFound( `Contact with id=${contactId} not found`);
  }
  sendSuccessRes(res, { result });
};

module.exports = getContactById;
